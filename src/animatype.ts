import Scene from "./scene";
import Canvas from "./canvas";
import Timeline from "./timeline";

export default class Animatype {
  scene:Scene = new Scene();
  canvas:Canvas;
  timeline:Timeline;
  constructor(canvas_id:string) {
    const canvas = document.getElementById(canvas_id) as HTMLCanvasElement;
    if (!canvas) throw new Error("Canvas not found")
    this.canvas = new Canvas(canvas);

    this.timeline = new Timeline(this.scene, this.canvas);
    this.timeline.appendTo(document.body)
    this.timeline.play();
    // const images = this.timeline.render_to_images()

    // //dowload all images
    // images.forEach((image, i) => {
    //   const a = document.createElement("a");
    //   a.href = image.toDataURL("image/png");
    //   image.data.
  }
}