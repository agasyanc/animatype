export default class Keyframe {
  constructor(public time:number, public value:number, public in_key:Keyframe|null = null, public out_key:Keyframe|null = null) {
    
  }
}