import { Plugin } from "./plugin";

export class PenPlugin extends Plugin{
    constructor(initialValues) {
        super({ ...initialValues, name: 'pen' })
    }

    draw(data) {
        super.draw(data)

        const { x, y, state } = data
        const context = this.canvas.getContext('2d')

        if(state === 'draw-started' || state === 'drawing') {
            context.beginPath()
            context.moveTo(x, y)
            context.lineTo(x, y)
            context.stroke()
            context.closePath()
        }
    }
}