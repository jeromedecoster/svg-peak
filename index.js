
module.exports = Peak

function Peak(opt) {
  if (!(this instanceof Peak)) return new Peak(opt)

  var _w = 100
  Object.defineProperty(this, 'w', {
    get: function() { return _w },
    set: function(val) {
      if (typeof val != 'number') return
      _w = val >= 0 ? val : 0
    }
  })
  var _h = 100
  Object.defineProperty(this, 'h', {
    get: function() { return _h },
    set: function(val) {
      if (typeof val != 'number') return
      _h = val >= 0 ? val : 0
    }
  })
  var _d = 'bottom'
  Object.defineProperty(this, 'd', {
    get: function() { return _d },
    set: function(val) {
      if (val != 'bottom' && val != 'left' && val != 'top' && val != 'right') return
      _d = val
    }
  })

  opt      = opt || {}
  this.w   = opt.w
  this.h   = opt.h
  this.d   = opt.d
  this.p1  = opt.p1  != undefined ? opt.p1  : 0
  this.p2  = opt.p2  != undefined ? opt.p2  : 0
}

Peak.prototype.path = function() {
  var w   = this.w
  var h   = this.h
  var p1  = this.p1
  var p2  = this.p2

  if (this.d == 'bottom') return 'M0 0 V' + p1 +
    ' L' + (w/2) + ' ' + p2 +
    ' L' + w + ' ' + p1 +
    ' V0 z'

  if (this.d == 'top') return 'M0 ' + h + ' V' + (h-p1) +
    ' L' + (w/2) + ' ' + (h-p2) +
    ' L' + w + ' ' + (h-p1) +
    ' V' + h + ' z'

  if (this.d == 'left') return 'M' + w + ' 0 H' + (w - p1) +
    ' L' + (w-p2) + ' ' + (h/2) +
    ' L' + (w - p1) + ' ' + h +
    ' H' + w + ' z'

  if (this.d == 'right') return 'M0 0 H' + p1 +
    ' L' + p2 + ' ' + (h/2) +
    ' L' + p1 + ' ' + h +
    ' H0 z'
}

Peak.prototype.svg = function() {
  var el = document.createElement('div')
  el.innerHTML = '<svg viewBox="0 0 ' + this.w + ' ' + this.h + '" preserveAspectRatio="none">' +
  '<path d="' + this.path() + '"></path></svg>'
  return el.removeChild(el.firstChild)
}

