'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');

    const extension = () => ({
      resolvers: {
        Mutation: {
          // Post
          createPost: async (_, args, ctx) => {
            const { toEntityResponse } = strapi.plugin('graphql').service('format').returnTypes;
            const post = await strapi.entityService.create('api::post.post', { data: {...args.data, user: ctx.state.user.id }})

            return toEntityResponse(post)
          },

          updatePost: async (_, args, ctx) => {
            const { toEntityResponse } = strapi.plugin('graphql').service('format').returnTypes;
            const post = await strapi.entityService.findOne('api::post.post', args.id, { populate: { user: true }})

            if(post.user.id !== ctx.state.user.id) {
              throw new Error('You are not authorized to update this post')
            }

            const updatedPost = await strapi.entityService.update('api::post.post', args.id, args)
            return toEntityResponse(updatedPost)
          },

          deletePost: async (_, args, ctx) => {
            const { toEntityResponse } = strapi.plugin('graphql').service('format').returnTypes;
            const post = await strapi.entityService.findOne('api::post.post', args.id, { populate: { user: true }})

            if(post.user.id !== ctx.state.user.id) {
              throw new Error('You are not authorized to delete this post')
            }

            const deletePost = await strapi.entityService.delete('api::post.post', args.id )
            return toEntityResponse(deletePost)
          },

          // Comment
          createComment: async (_, args, ctx) => {
            const { toEntityResponse } = strapi.plugin('graphql').service('format').returnTypes;
            const comment = await strapi.entityService.create('api::comment.comment', { data: {...args.data, user: ctx.state.user.id }})

            return toEntityResponse(comment)
          },

          updateComment: async (_, args, ctx) => {
            const { toEntityResponse } = strapi.plugin('graphql').service('format').returnTypes;
            const comment = await strapi.entityService.findOne('api::comment.comment', args.id, { populate: { user: true }})

            if(comment.user.id !== ctx.state.user.id) {
              throw new Error('You are not authorized to update this comment')
            }

            const updatedComment = await strapi.entityService.update('api::comment.comment', args.id, args)
            return toEntityResponse(updatedComment)
          },

          deleteComment: async (_, args, ctx) => {
            const { toEntityResponse } = strapi.plugin('graphql').service('format').returnTypes;
            const comment = await strapi.entityService.findOne('api::comment.comment', args.id, { populate: { user: true }})

            if(comment.user.id !== ctx.state.user.id) {
              throw new Error('You are not authorized to delete this comment')
            }

            const deleteComment = await strapi.entityService.delete('api::comment.comment', args.id )
            return toEntityResponse(deleteComment)
          }
        }
      }
    })
    extensionService.use(extension)
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
