export default class Canvas {
  ctx:CanvasRenderingContext2D;
  _canvas:HTMLCanvasElement
  onclick:Function|null = null;
  constructor(canvas:HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d", {willReadFrequently: true})!

    canvas.onclick = (e) => {
      if (this.onclick) this.onclick(e)
    }

    this._canvas = canvas;
    
  }
  clear(){
    const ctx = this._canvas.getContext("2d")
    ctx && ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  // save_as_image():ImageBitmap{
    
  //   let image = this.ctx.createImageData(this._canvas.width, this._canvas.height)

  //   return image;

  // }
}