// base class for all Events
// @NOTE: use a single Event per Surface
"use strict";

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});

var WaveEvent = function WaveEvent(source, type, originalEvent) {
  _classCallCheck(this, WaveEvent);

  this.source = source;
  this.type = type;
  this.originalEvent = originalEvent;

  this.target = originalEvent.target;
  this.currentTarget = originalEvent.currentTarget;
};

exports["default"] = WaveEvent;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnRlcmFjdGlvbnMvd2F2ZS1ldmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBRXFCLFNBQVMsR0FDakIsU0FEUSxTQUFTLENBQ2hCLE1BQU0sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO3dCQUR0QixTQUFTOztBQUUxQixNQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQzs7QUFFbkMsTUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQ25DLE1BQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQztDQUNsRDs7cUJBUmtCLFNBQVMiLCJmaWxlIjoic3JjL2ludGVyYWN0aW9ucy93YXZlLWV2ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYmFzZSBjbGFzcyBmb3IgYWxsIEV2ZW50c1xuLy8gQE5PVEU6IHVzZSBhIHNpbmdsZSBFdmVudCBwZXIgU3VyZmFjZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F2ZUV2ZW50IHtcbiAgY29uc3RydWN0b3Ioc291cmNlLCB0eXBlLCBvcmlnaW5hbEV2ZW50KSB7XG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm9yaWdpbmFsRXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuXG4gICAgdGhpcy50YXJnZXQgPSBvcmlnaW5hbEV2ZW50LnRhcmdldDtcbiAgICB0aGlzLmN1cnJlbnRUYXJnZXQgPSBvcmlnaW5hbEV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIH1cbn1cbiJdfQ==