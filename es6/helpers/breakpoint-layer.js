import BreakpointBehavior from '../behaviors/breakpoint-behavior';
import Dot from '../shapes/dot';
import Layer from '../core/layer';
import Line from '../shapes/line';


export default class BreakpointLayer extends Layer {
  constructor(data, options = {}, accessors = {}) {
    super('collection', data, options);

    const color = options.color;
    let commonShapeOptions = {};

    if (color) {
      accessors.color = function() { return color; };
      commonShapeOptions.color = color;
    }

    this.configureCommonShape(Line, accessors, commonShapeOptions);
    this.configureShape(Dot, accessors, {});
    this.setBehavior(new BreakpointBehavior());
  }
}
