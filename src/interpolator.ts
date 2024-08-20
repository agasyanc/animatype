import Keyframe from "./keyframe";

export default class Interpolator {
  keyframes:Keyframe[] = [];

  constructor() {
    this.keyframes.push(new Keyframe(0.0, 10))
    this.keyframes.push(new Keyframe(1, 100, new Keyframe(0.8, 120)))
    this.keyframes.push(new Keyframe(2, 0))
  }

  value(time:number) {
    let prev = this.keyframes[0];
    for (let i = 0; i < this.keyframes.length; i++) {
      const keyframe = this.keyframes[i];
      if (keyframe.time > time) {
        const t = (time - prev.time) / (keyframe.time - prev.time);
        return prev.value + t * (keyframe.value - prev.value);
      }
      prev = keyframe;
    }
    return prev.value;
  }
}