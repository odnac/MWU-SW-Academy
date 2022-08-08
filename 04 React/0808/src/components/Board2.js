import PropTypes from "prop-types"

const Board2 = ({ articles }) => {
    return (
        <ul>
            {articles.map(article => (
                <li key={article.id}>{article.id} | {article.title}</li>
            ))}
        </ul>
    )
}

Board2.propTypes = {
    articles: PropTypes.array
}

export default Board2