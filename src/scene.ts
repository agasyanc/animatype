import Canvas from "./canvas";
import Interpolator from "./interpolator";

export default class Scene {
  children: Array<any> = [];
  x: Interpolator = new Interpolator();
  y: number = 10;
  constructor() {
    
  }
  render(time:number, canvas:Canvas) {
    // canvas.ctx.save();

    const x = this.x.value(time);
    canvas.ctx.fillRect(x, this.y, 100, 100)
    // canvas.ctx.translate(x, this.y);
    // this._render(canvas);
    // canvas.ctx.restore();
  }
  // _render(canvas:Canvas) {
    
  //   // canvas.ctx.fillText('Scene', 0, 0)
  // }
}