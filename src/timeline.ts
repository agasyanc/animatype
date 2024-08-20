import Canvas from "./canvas";
import Scene from "./scene";

export default class Timeline {
  fps:number = 30;
  playhead:number = 0;
  length:number = 2;
  interval_id:number|null = null;
  
  constructor(public scene:Scene, public canvas:Canvas) {
    canvas.onclick = () => this.toggle();
  }
  get frames_count() {
    return this.length * this.fps;
  }
  get internal_fps() {
    return 1000/this.fps;
  }

  appendTo(element:HTMLElement) {
    const container = document.createElement('div')
    this.scene.x

    element.appendChild(container)
  }

  play() {
    
    this.interval_id = setInterval(() => {
      
      requestAnimationFrame(()=>this.render())
      
      if (this.playhead >= this.frames_count-1) this.playhead = 0;
      else this.playhead++;
    }, this.internal_fps)
  }
  stop() {
    if (this.interval_id) clearInterval(this.interval_id);
    this.interval_id = null;
  }
  toggle() {
    if (this.interval_id) this.stop();
    else this.play();
  }

  render() {
    this.canvas.clear();
    this.scene.render(this.playhead/this.fps, this.canvas);
  }

  // render_to_images():ImageData[]{
  //   let i = 0;
  //   const images = []
  //   while (i < this.frames_count) {
  //     this.canvas.clear();
  //     this.scene.render(i/this.fps, this.canvas);
  //     // const image = this.canvas.save_as_image();
  //     images.push(this.canvas.save_as_image())

  //     // document.body.append(image)
  //     i++;
  //   }
  //   return images;
  // }
}