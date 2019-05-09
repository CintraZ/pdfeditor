window.NotableModules = [
// 0 entry module
(function (module, exports, __webpack_require__) {

let NotableWebApp = void 0,
    NotableWebAppOptions = void 0;
{
    window.NotableWebApp = NotableWebApp = __webpack_require__(1);
}
const getNotableConfig = () => {
    // console.log(document.querySelector('#tooltip .highlight-button.color.color-picker'));
    return {
        svgUrl: 'http://www.w3.org/2000/svg',
        viewer: document.querySelector('#viewer'),
        commentsLayer: document.querySelector('#commentsLayer'),
        toolItems: {
            selectText: {
                container: document.querySelector('#tool-item-c-st'),
                div: document.querySelector('#tool-item-st'),
            },
            highLight: {
                container: document.querySelector('#tool-item-c-hl'),
                div: document.querySelector('#tool-item-hl'),
                expanded: document.querySelector('#expanded-hl'),
                subMode: {
                    hlText: document.querySelector('#submode-hl-text'),
                    hlBox: document.querySelector('#submode-hl-box'),
                },
                recentColor: {
                    first: document.querySelector('#hl-r-color-1'),
                    second: document.querySelector('#hl-r-color-2'),
                    third: document.querySelector('#hl-r-color-3')
                },
                extendedColor: {
                    first1: document.querySelector('#hl-ex-color-f1'),
                    first2: document.querySelector('#hl-ex-color-f2'),
                    first3: document.querySelector('#hl-ex-color-f3'),
                    second1: document.querySelector('#hl-ex-color-s1'),
                    second2: document.querySelector('#hl-ex-color-s2'),
                    second3: document.querySelector('#hl-ex-color-s3'),
                    third1: document.querySelector('#hl-ex-color-t1'),
                    third2: document.querySelector('#hl-ex-color-t2'),
                    third3: document.querySelector('#hl-ex-color-t3'),
                }

            },
            strikeThrough: {
                container: document.querySelector('#tool-item-c-sth'),
                div: document.querySelector('#tool-item-sth'),
                expanded: document.querySelector('#expanded-sth'),

                recentColor: {
                    first: document.querySelector('#sth-r-color-1'),
                    second: document.querySelector('#sth-r-color-2'),
                    third: document.querySelector('#sth-r-color-3')
                },
                extendedColor: {
                    first1: document.querySelector('#sth-ex-color-f1'),
                    first2: document.querySelector('#sth-ex-color-f2'),
                    first3: document.querySelector('#sth-ex-color-f3'),
                    second1: document.querySelector('#sth-ex-color-s1'),
                    second2: document.querySelector('#sth-ex-color-s2'),
                    second3: document.querySelector('#sth-ex-color-s3'),
                    third1: document.querySelector('#sth-ex-color-t1'),
                    third2: document.querySelector('#sth-ex-color-t2'),
                    third3: document.querySelector('#sth-ex-color-t3'),
                }
            },
            underLine: {
                container: document.querySelector('#tool-item-c-ul'),
                div: document.querySelector('#tool-item-ul'),
                expanded: document.querySelector('#expanded-ul'),

                recentColor: {
                    first: document.querySelector('#ul-r-color-1'),
                    second: document.querySelector('#ul-r-color-2'),
                    third: document.querySelector('#ul-r-color-3')
                },
                extendedColor: {
                    first1: document.querySelector('#ul-ex-color-f1'),
                    first2: document.querySelector('#ul-ex-color-f2'),
                    first3: document.querySelector('#ul-ex-color-f3'),
                    second1: document.querySelector('#ul-ex-color-s1'),
                    second2: document.querySelector('#ul-ex-color-s2'),
                    second3: document.querySelector('#ul-ex-color-s3'),
                    third1: document.querySelector('#ul-ex-color-t1'),
                    third2: document.querySelector('#ul-ex-color-t2'),
                    third3: document.querySelector('#ul-ex-color-t3'),
                }
            },
            comment: {
                container: document.querySelector('#tool-item-c-com'),
                div: document.querySelector('#tool-item-com'),
                expanded: document.querySelector('#expanded-com'),

                recentColor: {
                    first: document.querySelector('#com-r-color-1'),
                    second: document.querySelector('#com-r-color-2'),
                    third: document.querySelector('#com-r-color-3')
                },
                extendedColor: {
                    first1: document.querySelector('#com-ex-color-f1'),
                    first2: document.querySelector('#com-ex-color-f2'),
                    first3: document.querySelector('#com-ex-color-f3'),
                    second1: document.querySelector('#com-ex-color-s1'),
                    second2: document.querySelector('#com-ex-color-s2'),
                    second3: document.querySelector('#com-ex-color-s3'),
                    third1: document.querySelector('#com-ex-color-t1'),
                    third2: document.querySelector('#com-ex-color-t2'),
                    third3: document.querySelector('#com-ex-color-t3'),
                }
            },
            textBox: {
                container: document.querySelector('#tool-item-c-tb'),
                div: document.querySelector('#tool-item-tb'),
                expanded: document.querySelector('#expanded-tb'),

                recentColor: {
                    first: document.querySelector('#tb-r-color-1'),
                    second: document.querySelector('#tb-r-color-2'),
                    third: document.querySelector('#tb-r-color-3')
                },
                extendedColor: {
                    first1: document.querySelector('#tb-ex-color-f1'),
                    first2: document.querySelector('#tb-ex-color-f2'),
                    first3: document.querySelector('#tb-ex-color-f3'),
                    second1: document.querySelector('#tb-ex-color-s1'),
                    second2: document.querySelector('#tb-ex-color-s2'),
                    second3: document.querySelector('#tb-ex-color-s3'),
                    third1: document.querySelector('#tb-ex-color-t1'),
                    third2: document.querySelector('#tb-ex-color-t2'),
                    third3: document.querySelector('#tb-ex-color-t3'),
                },
                fontSize: {
                    div: document.querySelector('#tb-fontSize'),
                    span: document.querySelector('#tb-fontSize-span'),
                    subMenu: {
                        div: document.querySelector('#dropit-submenu-tb'),
                        items: {
                            f8: document.querySelector('#tb-fontSize-8'),
                            f9: document.querySelector('#tb-fontSize-9'),
                            f10: document.querySelector('#tb-fontSize-10'),
                            f11: document.querySelector('#tb-fontSize-11'),
                            f12: document.querySelector('#tb-fontSize-12'),
                            f14: document.querySelector('#tb-fontSize-14'),
                            f16: document.querySelector('#tb-fontSize-16'),
                            f18: document.querySelector('#tb-fontSize-18'),
                            f24: document.querySelector('#tb-fontSize-24'),
                            f30: document.querySelector('#tb-fontSize-30'),
                            f36: document.querySelector('#tb-fontSize-36'),
                            f48: document.querySelector('#tb-fontSize-48'),
                            f60: document.querySelector('#tb-fontSize-60'),
                            f72: document.querySelector('#tb-fontSize-72'),
                            f96: document.querySelector('#tb-fontSize-96'),
                        }
                    },
                }
            },
            drawing: {
                container: document.querySelector('#tool-item-c-drawing'),
                div: document.querySelector('#tool-item-drawing'),
                expanded: document.querySelector('#expanded-drawing'),

                recentColor: {
                    first: document.querySelector('#drawing-r-color-1'),
                    second: document.querySelector('#drawing-r-color-2'),
                    third: document.querySelector('#drawing-r-color-3')
                },
                extendedColor: {
                    first1: document.querySelector('#drawing-ex-color-f1'),
                    first2: document.querySelector('#drawing-ex-color-f2'),
                    first3: document.querySelector('#drawing-ex-color-f3'),
                    second1: document.querySelector('#drawing-ex-color-s1'),
                    second2: document.querySelector('#drawing-ex-color-s2'),
                    second3: document.querySelector('#drawing-ex-color-s3'),
                    third1: document.querySelector('#drawing-ex-color-t1'),
                    third2: document.querySelector('#drawing-ex-color-t2'),
                    third3: document.querySelector('#drawing-ex-color-t3'),
                },
                thickness: {
                    div: document.querySelector('#drawing-thickness'),
                    span: document.querySelector('#drawing-thickness-span'),
                    subMenu: {
                        div: document.querySelector('#dropit-submenu-drawing'),
                        items: {
                            t01: document.querySelector('#drawing-thickness-01'),
                            t025: document.querySelector('#drawing-thickness-025'),
                            t05: document.querySelector('#drawing-thickness-05'),
                            t1: document.querySelector('#drawing-thickness-1'),
                            t2: document.querySelector('#drawing-thickness-2'),
                            t4: document.querySelector('#drawing-thickness-4'),
                            t6: document.querySelector('#drawing-thickness-6'),
                            t8: document.querySelector('#drawing-thickness-8'),
                            t10: document.querySelector('#drawing-thickness-10'),
                            t12: document.querySelector('#drawing-thickness-12'),
                        }
                    },
                }
            },
            shapes: {
                container: document.querySelector('#tool-item-c-shapes'),
                div: document.querySelector('#tool-item-shapes'),
                expanded: document.querySelector('#expanded-shapes'),
                subMode: {
                    shapesRect: document.querySelector('#submode-shapes-rect'),
                    shapesCircle: document.querySelector('#submode-shapes-circle'),
                    shapesLine: document.querySelector('#submode-shapes-line'),
                },
                recentColor: {
                    first: document.querySelector('#shapes-r-color-1'),
                    second: document.querySelector('#shapes-r-color-2'),
                    third: document.querySelector('#shapes-r-color-3')
                },
                extendedColor: {
                    first1: document.querySelector('#shapes-ex-color-f1'),
                    first2: document.querySelector('#shapes-ex-color-f2'),
                    first3: document.querySelector('#shapes-ex-color-f3'),
                    second1: document.querySelector('#shapes-ex-color-s1'),
                    second2: document.querySelector('#shapes-ex-color-s2'),
                    second3: document.querySelector('#shapes-ex-color-s3'),
                    third1: document.querySelector('#shapes-ex-color-t1'),
                    third2: document.querySelector('#shapes-ex-color-t2'),
                    third3: document.querySelector('#shapes-ex-color-t3'),
                },
                thickness: {
                    div: document.querySelector('#shapes-thickness'),
                    span: document.querySelector('#shapes-thickness-span'),
                    subMenu: {
                        div: document.querySelector('#dropit-submenu-shapes'),
                        items: {
                            tfill: document.querySelector('#shapes-thickness-fill'),
                            t01: document.querySelector('#shapes-thickness-01'),
                            t025: document.querySelector('#shapes-thickness-025'),
                            t05: document.querySelector('#shapes-thickness-05'),
                            t1: document.querySelector('#shapes-thickness-1'),
                            t2: document.querySelector('#shapes-thickness-2'),
                            t4: document.querySelector('#shapes-thickness-4'),
                            t6: document.querySelector('#shapes-thickness-6'),
                            t8: document.querySelector('#shapes-thickness-8'),
                            t10: document.querySelector('#shapes-thickness-10'),
                            t12: document.querySelector('#shapes-thickness-12'),
                        }
                    },
                }
            },
            eraser: {
                container: document.querySelector('#tool-item-c-eraser'),
                div: document.querySelector('#tool-item-eraser'),
                expanded: document.querySelector('#expanded-eraser'),
                subMode: {
                    eraserAll: document.querySelector('#submode-eraser-all'),
                }
            },
            insertImage: {
                container: document.querySelector('#tool-item-c-sig'),
                div: document.querySelector('#tool-item-sig'),
            },
            waterMark: {
                container: document.querySelector('#tool-item-c-wm'),
                div: document.querySelector('#tool-item-wm'),
            }
        },
        toolTip: {
            div: document.querySelector('#tooltip'),
            colorPicker: document.querySelector('#tooltip .highlight-button.color.color-picker'),
            fillColor:document.querySelector('#tooltip .fill-color.color-picker'),
            strokeWidth: document.querySelector('#tooltip .font-size'),
            opacity: document.querySelector('#tooltip .opacity-picker'),
            copy: document.querySelector('#tooltip .copy'),
            comment: document.querySelector('#tooltip .comment'),
            delete: document.querySelector('#tooltip .mdi-trash-can-outline'),
        }
    }
};

function notableWebLoad() {
    let config = getNotableConfig();
    window.NotableApplication = NotableWebApp.NotableApplication;
    NotableWebApp.NotableApplication.run(config);
}
notableWebLoad();

}),
//  1  notableWebApp
(function (module, exports, __webpack_require__) {

let _notable_view_ = __webpack_require__(2);
let _notable_rect_ = __webpack_require__(5);
let _notable_polyline_ = __webpack_require__(8);
let _notable_shapes_circle_ = __webpack_require__(9);
let _notable_shapes_line_ = __webpack_require__(10);
let _notable_hltext_div_ = __webpack_require__(11);
let _notable_text_box_ = __webpack_require__(12);
let _notable_comment_ = __webpack_require__(13);
let _notable_image_ = __webpack_require__(14);

window.URL = window.URL || window.webkitURL;

let imgFileUrl = undefined;
let imgFileName = undefined;
let isWMDiv = true;

const MAX_IMG_WIDTH = 400;
const MAX_IMG_HEIGHT = 300;


Object.defineProperty(exports, '__esModule', {value: true});
exports.NotableApplication = undefined;

let EVENTS_MODE_ENUM = window.webProperties.EVENTS_MODE_ENUM;

let NotableApplication = {

    notableConfig: null,
    notableView: null,

    _notableInitialize: function () {
        let notableConfig = this.notableConfig;

        this.notableView = new _notable_view_.NotableView(notableConfig);
    },
    initialize: function (notableConfig) {
        this.notableConfig = notableConfig;
        this._notableInitialize();

        InitializeThickness(notableConfig);
        InitializeWebProperties();

    },
    run: function run(config) {
        this.initialize(config);
        // alert('here is run entry....');
        notableInitialized();
    },
};

let webProperties = window.webProperties;
function InitializeWebProperties() {
    webProperties.getModifiedContents = function() {
        let res = {
            rects: [],
            hlRects: [],
            circles: [],
            polyLines: [],
            lines: [],
            strikeThroughs: [],
            underLines: [],
            comments: [],
            markComments:[],
            images: [],
            waterMarks:[],
        };

        let view = NotableApplication.notableView;
        let svgs = view._svgLayers;
        let dSvgs = view._drawingSvgLayers;
        if(svgs.length === 0) {
            console.error('Leijie: there are no svg layer...QAQ');
            return;
        }
        // Rectangles in svglayer
        $.each(svgs, function() {
            // let _this = this;
            if(this._rects.length !== 0) {
                $.each(this._rects, function() {
                    res.rects.push({
                        page: this.containerId,
                        fill: this.fill,
                        strokeWidth: this.strokeWidth,
                        stroke: this.stroke,
                        fillOpacity: this.fillOpacity,
                        strokeOpacity: this.strokeOpacity,
                        strokeLinejoin: this.strokeLinejoin,
                        x: this.dx,
                        y: this.dy,
                        width: this.width,
                        height: this.height
                    });
                });
            }
            if(this.shapesCircles.length !== 0) {
                $.each(this.shapesCircles, function() {
                    res.circles.push({
                        page: this.containerId,
                        fill: this.fill,
                        stroke: this.stroke,
                        fillOpacity: this.strokeOpacity,
                        strokeOpacity: this.strokeOpacity,
                        strokeWidth: this.strokeWidth,
                        strokeLinejoin: this.strokeLinejoin,
                        x1: this.dx,
                        y1: this.dy,
                        rx: this.rx,
                        ry: this.ry
                    })
                });
            }
            if(this.shapesLines.length !== 0) {
                $.each(this.shapesLines, function() {
                    res.lines.push({
                        page: this.containerId,
                        stroke: this.stroke,
                        strokeOpacity: this.strokeOpacity,
                        strokeWidth: this.strokeWidth,
                        strokeLinejoin: this.strokeLinejoin,
                        x1: this.x1 + this.dx,
                        x2: this.x2 + this.dx,
                        y1: this.y1 + this.dy,
                        y2: this.y2 + this.dy
                    });
                })
            }
        });
        $.each(dSvgs, function() {
            if(this.polyLines.length !== 0) {
                $.each(this.polyLines, function() {
                    res.polyLines.push({
                        page: this.containerId,
                        stroke: this.stroke,
                        strokeOpacity: this.strokeOpacity,
                        strokeWidth: this.strokeWidth,
                        strokeLinejoin: this.strokeLinejoin,
                        points: this.points,
                        dx: this.dx,
                        dy: this.dy
                    })
                });

            }
        });

        // Rectangles not in svgLayer
        $.each(view.hlRects, function() {
            if(this.inComment ) return;
            if(this.backgroundColor !== 'none') {
                res.hlRects.push({
                    page: this.containerId,
                    top: this.top,
                    left: this.left,
                    width: this.width,
                    height: this.height,
                    backgroundColor: this.backgroundColor,
                    opacity: this.opacity,
                });
            }
        });
        $.each(view.comments, function() {
            console.log('this:'+this.markColor);
            if(this.isMark) {
                let hlDivs = this.hlDivs;
                let rects = [];
                $.each(hlDivs, function() {
                    let rect = {
                        page: this.containerId,
                        top: this.top,
                        left: this.left,
                        width: this.width,
                        height: this.height,
                        backgroundColor: this.backgroundColor,
                        opacity: this.opacity,
                    };
                    rects.push(rect);
                }) ;
                res.markComments.push({
                    page: this.containerId,
                    hlDivs: rects,
                    color: this.markColor,
                    content: this.comContent,
                });
            }
            else {
                res.comments.push({
                    page: this.containerId,
                    color: this.bgColor,
                    top: this.top,
                    left: this.left,
                    width: this.width,
                    height: this.height,
                    content: this.comContent
                })
            }
        });
        $.each(view.images, function() {
            if(this.type === 'waterMark') {
                res.waterMarks.push({
                    page: this.containerId,
                    name: this.name,
                    left: this.left,
                    top: this.top,
                    width: this.imgWidth,
                    height: this.imgHeight,
                    opacity: 0.3
                })
            }
            else {
                res.images.push({
                    page: this.containerId,
                    name: this.name,
                    left: this.left,
                    top: this.top,
                    width: this.imgWidth,
                    height: this.imgHeight,
                    opacity: this.opacity
                })
            }
        });
        return res;
    };
}
function InitializeThickness(config) {
    let drawingThickness = config.toolItems.drawing.thickness;
    $(drawingThickness.span).text('1');
    $(drawingThickness.subMenu.items.t1).addClass('selected');
    let shapesThickness = config.toolItems.shapes.thickness;
    $(shapesThickness.span).text('1');
    $(shapesThickness.subMenu.items.t1).addClass('selected');
    let tbFontSize = config.toolItems.textBox.fontSize;
    $(tbFontSize.span).text('14');
    $(tbFontSize.subMenu.items.f14).addClass('selected');
};
//events here
function notableInitialized() {
    let notableConfig = NotableApplication.notableConfig;
    let notableView = NotableApplication.notableView;
    ToolItemEvents(notableView);
    // SVGRectangleEvents(notableView._svgLayers);
    ToolTipsEventsBind();
    DocumentEvents(notableView);
}
function TargetIs(target, _class) {
    if($(target).is(_class)) return true;
    if($(target).parents(_class).length > 0) return true;
    return false;
}

function ToolTipsEventsBind() {
    let notableView = NotableApplication.notableView;
    let config = NotableApplication.notableConfig;
    let toolTip = config.toolTip.div;
    let colorPicker = config.toolTip.colorPicker;
    let fillColor = config.toolTip.fillColor;

    let strokeWidth = config.toolTip.strokeWidth;
    let opacity = config.toolTip.opacity;
    let remove = config.toolTip.delete;
    let copy = config.toolTip.copy;
    let comment = config.toolTip.comment;

    let timeOutId = null;
    let timeId2 = null;

    $(toolTip).on('mouseenter', function() {
        if(window.timeout1) clearTimeout(window.timeout1);
    });
    $(toolTip).on('mouseleave', function() {
        $(toolTip).css('display', 'none');
    });

    $(colorPicker).on('mouseenter', function() {
         timeOutId = setTimeout(function () {
            $(this).addClass('hover');
        }, 500);
    });
    $(colorPicker).on('mouseleave', function() {
        if(timeOutId) clearTimeout(timeOutId);
        timeId2 = setTimeout(() => {
            $(this).removeClass('hover');
        }, 50);
    });

    let colorSelector = $(colorPicker).children('.highlight-color-selector')[0];

    $(colorSelector).on('mouseenter', function() {
         if(timeId2) clearTimeout(timeId2);
    });
    $(colorSelector).on('mouseleave', function() {
        $(colorPicker).removeClass('hover');
    });

    let cells = $(colorSelector).find('.color-cell');
    // console.log(cells);
    $.each(cells, function() {
        let div = $(this).children('div')[0];
        $(div).click(function() {
            let bg = $(div).css('background-color');
            $(colorPicker).css('background-color', bg);

            let elem = webProperties.CurElem;

            if(!elem.toolItem.currentRecentColor) {
                $.each(elem.toolItem.recentColor, function() {
                    $(this).removeClass('selected');
                });
            }
            if(elem.constructor.name === 'TextHLDiv') {
                let hlRects = NotableApplication.notableView.hlRects;
                $.each(hlRects, function() {
                    if(this.backgroundColor !== 'none') {
                        if(this.hlWrapper === elem.hlWrapper) {
                            this.backgroundColor = bg;
                            $(this.div).css('background-color', bg);
                        }
                    }
                });
            } else if(elem.fill && elem.fill !== 'none') {
                elem.fill = bg;
                $(elem.div).attr('fill', bg);
            } else if(elem.stroke) {
                elem.stroke = bg;
                $(elem.div).attr('stroke', bg);
            }
            // Update recentColor
            UpdateRecentColor(elem.toolItem, bg);
            UpdateExtendColor(elem.toolItem, bg);
            if(webProperties.isFill) $($(fillColor).children()[0]).css('color', bg);
            webProperties.CurrentColor = bg;
        });
    });

    $(fillColor).click(function() {
        let elem = webProperties.CurElem;
        let div = $(fillColor).children()[0];
        if(webProperties.isFill) {
            $(div).css('color', 'white');
            $(strokeWidth).val('string:1px');


            elem.fill = 'none';
            elem.strokeWidth = 1;
            elem.stroke = webProperties.CurrentColor;

            $(elem.div).attr('fill', 'none');
            $(elem.div).attr('stroke-width', 1);
            $(elem.div).attr('stroke', webProperties.CurrentColor);

            webProperties.isFill = false;
            return;
        }
        $(div).css('color', webProperties.CurrentColor);
        $(strokeWidth).val('string:fill');

        elem.fill = webProperties.CurrentColor;

        $(elem.div).attr('fill', webProperties.CurrentColor);

        webProperties.isFill = true;
    });

    $(strokeWidth).change(function() {
        // console.log('stroke');
        let elem = webProperties.CurElem;
        let value = $(this).val();
        if (value === 'string:fill') {
            webProperties.isFill = true;
            elem.fill = webProperties.CurrentColor;
            $(elem.div).attr('fill', webProperties.CurrentColor);
            $(elem.div).removeAttr('stroke-width');
            return;
        }
        let valuef = value.split(':');
        valuef = valuef[1].split('p');
        valuef = valuef[0];
        console.log(valuef);
        elem.fill = 'none';
        elem.strokeWidth = parseFloat(valuef);
        elem.stroke = webProperties.CurrentColor;

        $(elem.div).attr('fill', elem.fill);
        $(elem.div).attr('stroke', webProperties.CurrentColor);
        $(elem.div).attr('stroke-width', elem.strokeWidth);
        webProperties.isFill = false;
    });

    $(opacity).change(function() {
        let elem = webProperties.CurElem;

        let value = $(this).val();
        let op = parseFloat(value.split(':')[1]);
        if(elem.opacity) {
            elem.opacity = op;
            $(elem.div).css('opacity', op);
            return;
        }
        elem.fillOpacity = op;
        elem.strokeOpacity = op;
        $(elem.div).attr('fill-opacity', op);
        $(elem.div).attr('stroke-opacity', op);
    });

    $(remove).click(function() {
        let elem = webProperties.CurElem;

        switch (elem.constructor.name) {
            case 'NotableRect': {
                elem.svg.removeRect(elem);
                break;
            }
            case 'ShapesCircle': {
                elem.svg.removeShapesCircle(elem);
                break;
            }
            case 'ShapesLine': {
                elem.svg.removeShapesLine(elem);
                break;
            }
            case 'NotablePolyline': {
                elem.svg.removePolyLine(elem);
                break;
            }
            case 'TextHLDiv': {
                RemoveHLDiv(elem);
                break;
            }
            case 'Image': {
                RemoveImage(elem);
                break;
            }
        }
        // Hidden tool tips
        $(toolTip).css('display', 'none');
    });

    $(copy).click(function() {
        let elem = webProperties.CurElem;

        let dummy = document.createElement("input");

        // Add it to the document
        document.body.appendChild(dummy);

        // Set its ID
        dummy.setAttribute("id", "dummy_id");

        // Output the array into it
        document.getElementById("dummy_id").value=elem.string;

        // Select it
        dummy.select();

        // Copy its contents
        document.execCommand("copy");

        // Remove it as its not needed anymore
        document.body.removeChild(dummy);

        // Hide tool tips
        $(this).removeClass('mdi-content-copy');
        $(this).addClass('mdi-check');
        let _this = this;
        setTimeout(function() {
            $(toolTip).css('display', 'none');
            $(_this).removeClass('mdi-check');
            $(_this).addClass('mdi-content-copy');
        }, 700);
    });

    $(comment).click(function() {
        // Create a mark comment object

        let hlDivs = [];
        let color = undefined;
        let elem = webProperties.CurElem;
        let containerId = elem.containerId;
        // Get all divs in the same wrapper
        $.each(notableView.hlRects, function() {
            if(this.hlWrapper === elem.hlWrapper) {
                this.inComment = true;
                if(!this.isLine) {
                    hlDivs.push(this);
                }
                if(!color && this.backgroundColor !== 'none') color = this.backgroundColor;
            }
        });
        let comment = new _notable_comment_.Comment({
            containerId: containerId,
            comContainer: config.commentsLayer,
            top: elem.top,
            isMark: true,
            hlDivs: hlDivs,
            markColor: color,
        });
        notableView.comments.push(comment);
        notableView.curComment = comment;

        CommentEventsBind(comment, notableView);
    });

}

function DocumentEvents(notableView) {
    let config = NotableApplication.notableConfig;

    let circleEvtArgs = [
        { resizableX: true, resizableY: true, resizableW: true, resizableH: true, dxRevise: -1, dyRevise: -1},  //tl
        { resizableX: false, resizableY: true, resizableW: true, resizableH: true, dxRevise: 1, dyRevise: -1},  //tr
        { resizableX: false, resizableY: true, resizableW: false, resizableH: true, dxRevise: 1, dyRevise: -1}, //tm
        { resizableX: true, resizableY: false, resizableW: true, resizableH: true, dxRevise: -1, dyRevise: 1},  //bl
        { resizableX: false, resizableY: false, resizableW: true, resizableH: true, dxRevise: 1, dyRevise: 1},  //br
        { resizableX: false, resizableY: false, resizableW: false, resizableH: true, dxRevise: 1, dyRevise: 1},  //bm
        { resizableX: true, resizableY: false, resizableW: true, resizableH: false, dxRevise: -1, dyRevise: 1}, //lm
        { resizableX: false, resizableY: false, resizableW: true, resizableH: false, dxRevise: 1, dyRevise: 1}  //rm
    ];

    let shapesCircleEvtArgs = [
        {resizableX: false, resizableY: true, resizableDX: false, resizableDY: true, revise: -1},
        {resizableX: true, resizableY: false, resizableDX: false, resizableDY: false, revise: 1},
        {resizableX: false, resizableY: true, resizableDX: false, resizableDY: false, revise: 1},
        {resizableX: true, resizableY: false, resizableDX: true, resizableDY: false, revise: -1},
    ];

    document.addEventListener('mousedown', function(evt) {
        let page = document.querySelector('#page' + webProperties.CurPageNum);
        let e = evt || window.event;
        let target = e.target;
        window.COMpointerTarget = target;
        // if($(target).is('.notableAnnotationLayer-top')) alert('is');

        // Reset comment
        // let comment = notableView.curComment;
        // if(!TargetIs(target, '.pointer') && !TargetIs(target, '.highlight-color-selector')) {
        //     if(comment) comment._remove();
        // }

        if($(target).is('.pointer') || $(target).is('.commentBody') ||
            $(target).parents('.commentBody').length !== 0) return;
        if(notableView.comments.length !==0 ) {
            $.each(notableView.comments, function() {
                $(this.commentBody).removeClass('dim-comment');
                $(this.commentBody).removeClass('aligned');
                $(this.pointer).removeClass('spotlight');
            });
        }

        if(!$(target).is('.textLayer')) {
            if($(target).parent('.textLayer').length === 0) return;
        }

        // if(webProperties.ToolMode !== 'hlText') return;
        webProperties.PreviousC.x = e.clientX;
        webProperties.PreviousC.y = e.clientY;
        switch(webProperties.ToolMode) {
            case 'hlText': {
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_HL_TEXT;
                break;
            }
            case 'strikeThrough': {
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_STRIK_TH;
                break;
            }
            case 'underLine': {
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_UNDER_LINE;
                break;
            }
            case 'textBox': {
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_ADD_TB;
                break;
            }
        }

    });
    document.addEventListener('mousemove', function(evt) {
        let e = evt || window.event;
        webProperties.CurrentC.x = e.clientX;
        webProperties.CurrentC.y = e.clientY;

        let eventMode = webProperties.EventMode;
        let toolMode = webProperties.ToolMode;
        if(!eventMode) return;
        switch (eventMode) {
            case EVENTS_MODE_ENUM.MOD_RESIZE_RECT: {
                let svgLayer = notableView.getCurrentSvgLayer();
                let rect = svgLayer.getCurrentRect();
                let circleNum = webProperties.CurResizeCircleNum;


                let arg = circleEvtArgs[circleNum];
                arg.currentC = webProperties.CurrentC;
                arg.previousC = webProperties.PreviousC;

                rect.resizeRect(arg);
                rect.updateCircles();
                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
                break;
            }
            case EVENTS_MODE_ENUM.MOD_MOVE_RECT: {
                // let svgLayer = notableView.getCurrentSvgLayer();
                // let rect = svgLayer.getCurrentRect();

                let rect = webProperties.CurElem;
                MoveElement(rect);
                rect.updateCircles();

                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
                break;
            }
            case EVENTS_MODE_ENUM.MOD_DRAW_RECT: {
                let fill = 'none';
                let strokeWidth = undefined;
                if($(config.toolItems.shapes.thickness.span).text() === 'FILL') fill = webProperties.CurrentColor;
                else {
                    strokeWidth = parseFloat($(config.toolItems.shapes.thickness.span).text());
                }
                let svgLayer = notableView.getCurrentSvgLayer();

                let marginLeft = $(svgLayer.div).offset().left;
                let marginTop = $(svgLayer.div).offset().top;

                let rect = svgLayer.getCurrentRect();

                if (!rect || rect.drawFinished) {
                    if(webProperties.ToolMode === 'shapesRect') {
                        rect = new _notable_rect_.NotableRect({
                            containerId: webProperties.CurPageNum,

                            svg: svgLayer,

                            toolItem: config.toolItems.shapes,
                            fill: fill,
                            fillOpacity: 1,
                            strokeOpacity: 1,
                            stroke: webProperties.CurrentColor,
                            strokeWidth: strokeWidth,
                            container: svgLayer,
                            x: webProperties.PreviousC.x - marginLeft,
                            y: webProperties.PreviousC.y - marginTop,
                            width: 0,
                            height: 0,
                        });
                    } else {
                        rect = new _notable_rect_.NotableRect({
                            containerId: webProperties.CurPageNum,

                            svg: svgLayer,
                            toolItem: config.toolItems.highLight,
                            container: svgLayer,
                            fill: webProperties.CurrentColor,
                            x: webProperties.PreviousC.x - marginLeft,
                            y: webProperties.PreviousC.y - marginTop,
                            width: 0,
                            height: 0,
                        });
                    }
                    //add EventListener
                    svgLayer._rects.push(rect);
                    svgLayer.currentRect = rect;
                    svgLayer.rectEventsBind(svgLayer.currentRect);
                }

                let dxy = webProperties.getCoordinatesDis();
                let width = dxy.dx;
                let height = dxy.dy;
                if(width < 0) {
                    width = -width;
                    rect.x = webProperties.CurrentC.x - marginLeft;
                } else rect.x = webProperties.PreviousC.x - marginLeft;
                if(height < 0) {
                    height = -height;
                    rect.y = webProperties.CurrentC.y - marginTop;
                } else rect.y = webProperties.PreviousC.y - marginTop;

                rect.width = width;
                rect.height = height;

                rect.update();

                break;
            }
            case EVENTS_MODE_ENUM.MOD_ERASER_ALL: {
                let svgLayer = notableView.getCurrentSvgLayer();
                let marginLeft = $(svgLayer.div).offset().left;
                let marginTop = $(svgLayer.div).offset().top;

                let div = GetCurHlDiv({x: e.clientX - marginLeft, y: e.clientY - marginTop});
                if(div && !div.inComment) RemoveHLDiv(div);

                let img = GetCurImage(e.clientX, e.clientY);
                if(img) {
                    RemoveImage(img);
                }
                break;
            }
            case EVENTS_MODE_ENUM.MOD_DRAW_POLYLINE: {
                let strokeWidth = parseFloat($(config.toolItems.drawing.thickness.span).text());

                let dSvg = notableView.getCurDrawingSvgLayer();
                let marginLeft = $(dSvg.div).offset().left;
                let marginTop = $(dSvg.div).offset().top;

                let sx = webProperties.PreviousC.x - marginLeft;
                let sy = webProperties.PreviousC.y - marginTop;
                let cx = webProperties.CurrentC.x - marginLeft;
                let cy = webProperties.CurrentC.y - marginTop;

                let polyLine = dSvg.getCurPolyLine();
                if(!polyLine || polyLine.drawFinished) {
                    // create a new polyLine object
                    polyLine = new _notable_polyline_.NotablePolyline({
                        containerId: webProperties.CurPageNum,

                        svg: dSvg,
                        toolItem: config.toolItems.drawing,
                        container: dSvg.div,
                        pointsStr: '' + sx + ',' + sy,
                        strokeWidth: strokeWidth,
                    });
                    dSvg.polyLines.push(polyLine);
                    dSvg.curPolyLine = polyLine;
                    polyLine.points.push([sx, sy]);
                    // add EventsListener
                    dSvg.polyLineEventsBind(polyLine);
                }
                //
                polyLine.points.push([cx, cy]);
                polyLine.pointsStr = polyLine.pointsStr + ' ' + cx + ',' + cy;
                polyLine.update();
                break;
            }
            case EVENTS_MODE_ENUM.MOD_MOVE_POLYLINE: {
                // let dSvg = notableView.getCurDrawingSvgLayer();
                // let polyLine = dSvg.getCurPolyLine();

                let polyLine = webProperties.CurElem;

                MoveElement(polyLine);
                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
                break;
            }
            case EVENTS_MODE_ENUM.MOD_DRAW_S_CIRCLE: {
                let fill = 'none';
                let strokeWidth = undefined;
                if($(config.toolItems.shapes.thickness.span).text() === 'FILL') fill = webProperties.CurrentColor;
                else {
                    strokeWidth = parseFloat($(config.toolItems.shapes.thickness.span).text());
                }
                let svg = notableView.getCurrentSvgLayer();
                let marginLeft = $(svg.div).offset().left;
                let marginTop = $(svg.div).offset().top;

                let sx = webProperties.PreviousC.x - marginLeft;
                let sy = webProperties.PreviousC.y - marginTop;
                // current x and y

                let shapesCircle = svg.getCurShapesCircle();
                if (!shapesCircle || shapesCircle.drawFinished) {
                    shapesCircle = new _notable_shapes_circle_.ShapesCircle({
                        containerId: webProperties.CurPageNum,
                        svg: svg,

                        toolItem: config.toolItems.shapes,
                        fill: fill,
                        container: svg.div,
                        cx: sx,
                        cy: sy,
                        strokeWidth: strokeWidth
                    });
                    svg.shapesCircles.push(shapesCircle);
                    svg.curShapesCircle = shapesCircle;
                    // add EventsListener
                    svg.shapesCircleEventsBind(shapesCircle);
                }
                // calculate cx cy rx ry and update shapes circle
                shapesCircle.cx = (webProperties.PreviousC.x + webProperties.CurrentC.x) / 2 - marginLeft;
                shapesCircle.cy = (webProperties.PreviousC.y + webProperties.CurrentC.y) / 2 - marginTop;
                shapesCircle.rx = Math.abs(webProperties.getCoordinatesDis().dx) / 2;
                shapesCircle.ry = Math.abs(webProperties.getCoordinatesDis().dy) / 2;
                shapesCircle.update();
                break;
            }
            case EVENTS_MODE_ENUM.MOD_MOVE_S_CIRCLE: {
                // let svg = notableView.getCurrentSvgLayer();
                // let shapesCircle = svg.getCurShapesCircle();
                let shapesCircle = webProperties.CurElem;
                MoveElement(shapesCircle);
                shapesCircle.updateCircles();

                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
                break;

            }
            case EVENTS_MODE_ENUM.MOD_RESIZE_S_CIRCLE: {
                let svg = notableView.getCurrentSvgLayer();
                let shapesCircle = svg.getCurShapesCircle();
                let index = webProperties.CurResizeCircleNum;
                let arg = shapesCircleEvtArgs[index];
                arg.currentC = webProperties.CurrentC;
                arg.previousC = webProperties.PreviousC;

                shapesCircle.resizeShapesCircle(arg);
                shapesCircle.updateCircles();

                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
                break;
            }
            case EVENTS_MODE_ENUM.MOD_DRAW_S_LINE: {
                let strokeWidth = undefined;
                if($(config.toolItems.shapes.thickness.span).text() !== 'FILL')
                {
                    strokeWidth = parseFloat($(config.toolItems.shapes.thickness.span).text());
                }
                let svg = notableView.getCurrentSvgLayer();
                let marginLeft = $(svg.div).offset().left;
                let marginTop = $(svg.div).offset().top;

                let sx = webProperties.PreviousC.x - marginLeft;
                let sy = webProperties.PreviousC.y - marginTop;

                let shapesLine = svg.getCurShapesLine();
                if (!shapesLine || shapesLine.drawFinished) {
                    shapesLine = new _notable_shapes_line_.ShapesLine({
                        containerId: webProperties.CurPageNum,
                        svg: svg,
                        container: svg.div,
                        x1: sx,
                        y1: sy,
                        x2: sx,
                        y2: sy,
                        strokeWidth: strokeWidth
                    });
                    svg.shapesLines.push(shapesLine);
                    svg.curShapesLine = shapesLine;
                    // add EventsListener
                    svg.shapesLineEventsBind(shapesLine);
                }

                // let dxy = webProperties.getCoordinatesDis();
                shapesLine.x2 = webProperties.CurrentC.x - marginLeft;
                shapesLine.y2 = webProperties.CurrentC.y - marginTop;
                shapesLine.update();
                break;
            }
            case EVENTS_MODE_ENUM.MOD_MOVE_S_LINE: {
                // let svg = notableView.getCurrentSvgLayer();
                // let shapesLine = svg.getCurShapesLine();
                let shapesLine = webProperties.CurElem;

                MoveElement(shapesLine);
                shapesLine.updateCircles();

                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
                break;
            }
            case EVENTS_MODE_ENUM.MOD_RESIZE_S_LINE: {
                let svg = notableView.getCurrentSvgLayer();
                let shapesLine = svg.getCurShapesLine();
                let index = webProperties.CurResizeCircleNum;
                let arg = {};
                arg.index = index;
                arg.currentC = webProperties.CurrentC;
                arg.previousC = webProperties.PreviousC;

                shapesLine.resizeShapesLine(arg);
                shapesLine.updateCircles();

                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
                break;
            }
            case EVENTS_MODE_ENUM.MOD_RESIZE_TB: {
                let textBox = webProperties.CurTextBox;
                textBox.resizeBox(webProperties.CurResizeCircleNum);
                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
                break;
            }
            case EVENTS_MODE_ENUM.MOD_MOVE_TB: {
                let textBox = webProperties.CurTextBox;
                let dx = webProperties.getCoordinatesDis().dx;
                let dy = webProperties.getCoordinatesDis().dy;

                textBox.left += dx;
                textBox.top += dy;
                textBox.update();

                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
                break;
            }
            case EVENTS_MODE_ENUM.MOD_MOVE_COM: {
                let comment = notableView.curComment;

                let dx = webProperties.getCoordinatesDis().dx;
                let dy = webProperties.getCoordinatesDis().dy;

                comment.top += dy;
                comment.left += dx;
                comment.movePointer();

                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
                break;
            }
            case EVENTS_MODE_ENUM.MOD_DRAW_IMG: {
                if(!imgFileUrl) {
                    webProperties.EventMode = EVENTS_MODE_ENUM.MOD_NULL;
                    return;
                }
                // Update
                let img = notableView.curImage;
                if(!img || img.drawFinished) return;
                let page = document.querySelector('#page' + webProperties.CurPageNum);
                if(e.clientX > $(page).offset().left + $(page).width() + 18) {
                    $(img.preDiv).remove();
                    notableView.curImage = null;
                    return;
                }
                let svg = document.querySelector('#painting' + webProperties.CurPageNum);
                let marginLeft = $(svg).offset().left;
                let marginTop = $(svg).offset().top;
                img.left = webProperties.CurrentC.x - marginLeft;
                img.top = webProperties.CurrentC.y - marginTop;
                img.moveImage();
                break;
            }
            case EVENTS_MODE_ENUM.MOD_MOVE_IMG: {
                let img = notableView.curImage;
                if(!img || !img.drawFinished) return;
                let dxy = webProperties.getCoordinatesDis();

                let page = document.querySelector('#page' + img.containerId);
                let pageHeight = $(page).height();

                img.left += dxy.dx;
                img.top += dxy.dy;

                if(img.top < 0) img.top = 0;
                if(img.top > (pageHeight - img.imgHeight)) img.top = pageHeight - img.imgHeight;
                img.moveImage();

                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
                break;
            }
            case EVENTS_MODE_ENUM.MOD_RESIZE_IMG: {
                window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

                let img = notableView.curImage;
                if(!img || !img.drawFinished) return;
                let dxy = webProperties.getCoordinatesDis();


                let ins = (img.imgWidth + dxy.dx) / img.imgWidth;
                img.resizeImage(img.imgWidth + dxy.dx, img.imgHeight * ins)
                webProperties.PreviousC.x = webProperties.CurrentC.x;
                webProperties.PreviousC.y = webProperties.CurrentC.y;
            }
            break;
        }
    });
    document.addEventListener('mouseup', function(evt) {
        let e = evt || window.event;
        let eventMode = webProperties.EventMode;
        if(!eventMode) return;
        switch (eventMode) {
            case EVENTS_MODE_ENUM.MOD_DRAW_RECT: {
                let svgLayer = notableView.getCurrentSvgLayer();
                let rect = svgLayer.getCurrentRect();
                if(!rect || rect.drawFinished) break;
                rect.dx = rect.x;
                rect.dy = rect.y;
                rect.x = 0.0;
                rect.y = 0.0;
                rect.div.setAttribute('x', '0.0');
                rect.div.setAttribute('y', '0.0');
                rect.div.setAttribute('dx', rect.dx);
                rect.div.setAttribute('dy', rect.dy);
                rect.div.setAttribute('transform', 'translate(' + rect.dx + ', ' + rect.dy + ')');
                rect.drawFinished = true;
                rect.div.classList.remove('no-events');
                break;
            }
            case EVENTS_MODE_ENUM.MOD_DRAW_POLYLINE: {
                let dSvg = notableView.getCurDrawingSvgLayer();
                let dSvgId = $(dSvg.div).attr('id'),
                    svgId = dSvgId.substring(0, dSvgId.length - 8);
                let svg = document.querySelector('#' + svgId);
                let polyLine = dSvg.getCurPolyLine();
                if(!polyLine || polyLine.drawFinished) break;
                polyLine.drawFinished = true;

                // calculate new points of poly line
                polyLine.dx = $(polyLine.div).offset().left - $(dSvg.div).offset().left;
                polyLine.dy = $(polyLine.div).offset().top - $(dSvg.div).offset().top;

                polyLine.points = polyLine.points.map((p)=>{
                    let x = p[0] - polyLine.dx;
                    let y = p[1] - polyLine.dy;
                    x = x < 0 ? 0 : x;
                    y = y < 0 ? 0 : y;
                    return [x, y];
                });

                polyLine.pointsStr = polyLine.getPointsStr();
                polyLine.update();
                $(polyLine.div).attr('dx', polyLine.dx);
                $(polyLine.div).attr('dy', polyLine.dy);
                $(polyLine.div).attr('transform', 'translate(' + polyLine.dx + ', ' + polyLine.dy + ')');
                polyLine.container.removeChild(polyLine.div);

                // put polyLine in g and put g to painting
                let g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                $(g).addClass('shape');
                $(g).attr('pointer-events', 'visiblePainted');
                polyLine.g = g;
                g.appendChild(polyLine.div);
                polyLine.container = svg;
                svg.appendChild(g);

                $(polyLine.div).removeClass('no-events');
                break;
            }
            case EVENTS_MODE_ENUM.MOD_MOVE_POLYLINE: {
                let dSvg = notableView.getCurDrawingSvgLayer();
                let polyLine = dSvg.getCurPolyLine();
                $(polyLine.div).attr('stroke', polyLine.stroke);
                break;
            }
            case EVENTS_MODE_ENUM.MOD_DRAW_S_CIRCLE: {
                let svg = notableView.getCurrentSvgLayer();
                let shapesCircle = svg.getCurShapesCircle();

                if(!shapesCircle || shapesCircle.drawFinished) break;
                // Calculate new coordinates of shapesCircle
                shapesCircle.dx = shapesCircle.cx - shapesCircle.rx;
                shapesCircle.dy = shapesCircle.cy - shapesCircle.ry;
                shapesCircle.cx = shapesCircle.rx;
                shapesCircle.cy = shapesCircle.ry;
                shapesCircle.update();

                $(shapesCircle.div).attr('dx', shapesCircle.dx);
                $(shapesCircle.div).attr('dy', shapesCircle.dy);
                $(shapesCircle.div).attr('transform', 'translate(' + shapesCircle.dx + ', ' + shapesCircle.dy + ')');

                let g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                $(g).addClass('shape shape-ellipse');
                $(g).attr('pointer-events', 'visiblePainted');
                shapesCircle.g = g;
                g.appendChild(shapesCircle.div);
                shapesCircle.container.appendChild(g);

                shapesCircle.drawFinished = true;
                $(shapesCircle.div).removeClass('no-events');
                break;
            }
            case EVENTS_MODE_ENUM.MOD_DRAW_S_LINE: {
                let svg = notableView.getCurrentSvgLayer();
                let shapesLine = svg.getCurShapesLine();

                if(!shapesLine || shapesLine.drawFinished) break;

                // Calculate new coordinates of shapesLine
                let dxy = webProperties.getCoordinatesDis(),
                    dx = dxy.dx,
                    dy = dxy.dy;
                if(dx > 0 && dy < 0) {
                    shapesLine.dx = shapesLine.x1;
                    shapesLine.dy = shapesLine.y1 + dy;
                    shapesLine.x1 = 0;
                    shapesLine.y1 = -dy;
                    shapesLine.x2 = dx;
                    shapesLine.y2 = 0;
                } else if(dx > 0 && dy > 0) {
                    shapesLine.dx = shapesLine.x1;
                    shapesLine.dy = shapesLine.y1;
                    shapesLine.x1 = 0;
                    shapesLine.y1 = 0;
                    shapesLine.x2 = dx;
                    shapesLine.y2 = dy;
                } else if(dx < 0 && dy > 0) {
                    shapesLine.dx = shapesLine.x2;
                    shapesLine.dy = shapesLine.y2 - dy;
                    shapesLine.x1 = -dx;
                    shapesLine.y1 = 0;
                    shapesLine.x2 = 0;
                    shapesLine.y2 = dy;
                } else if(dx < 0 && dy < 0) {
                    shapesLine.dx = shapesLine.x2;
                    shapesLine.dy = shapesLine.y2;
                    shapesLine.x1 = -dx;
                    shapesLine.y1 = -dy;
                    shapesLine.x2 = 0;
                    shapesLine.y2 = 0;
                }
                shapesLine.update();
                $(shapesLine.div).attr('dx', shapesLine.dx);
                $(shapesLine.div).attr('dy', shapesLine.dy);
                $(shapesLine.div).attr('transform', 'translate(' + shapesLine.dx + ', ' + shapesLine.dy + ')');
                let g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                $(g).addClass('shape shape-line');
                $(g).attr('pointer-events', 'visiblePainted');
                shapesLine.g = g;
                g.appendChild(shapesLine.div);
                shapesLine.container.appendChild(g);

                shapesLine.drawFinished = true;
                $(shapesLine.div).removeClass('no-events');
                break;
            }
            case EVENTS_MODE_ENUM.MOD_SELECT_TEXT: {
                // TextHighLightHandler();
                break;
            }
            case EVENTS_MODE_ENUM.MOD_HL_TEXT: {
                TextHighLightHandler();
                break;
            }
            case EVENTS_MODE_ENUM.MOD_STRIK_TH: {
                TextHighLightHandler();
                break;
            }
            case EVENTS_MODE_ENUM.MOD_UNDER_LINE: {
                TextHighLightHandler();
                break;
            }
            case EVENTS_MODE_ENUM.MOD_ADD_TB: {

                break;
            }
            case EVENTS_MODE_ENUM.MOD_MOVE_COM: {
                notableView.curComment.moveComment();

                break;
            }
            case EVENTS_MODE_ENUM.MOD_DRAW_IMG: {
                notableView.curImage.finishDraw();
                notableView.curImage.removePre();
                notableView.curImage.drawFinished = true;
                break;
            }
        }
        webProperties.EventMode = EVENTS_MODE_ENUM.MOD_NULL;

    });
    document.addEventListener('click', function(evt) {

        let e = evt || window.event;
        let target = e.target;
        webProperties.PreviousC.x = e.clientX;
        webProperties.PreviousC.y = e.clientY;


        if(!$(target).is('.textLayer')) {
            if($(target).parent('.textLayer').length === 0) return;
        }
        if(webProperties.PreviousC.x !== webProperties.CurrentC.x || webProperties.PreviousC.y !== webProperties.CurrentC.y) return;
        switch (webProperties.ToolMode) {
            case 'textBox' : {
                AddTextBox(e, notableView);
                break;
            }
            case 'comment': {
                AddComment(e, notableView);
                break;
            }
        }
    });
}

function ToolItemEvents(notableView){
    let svgLayerLists = notableView.svgLayers;
    let drawingSvgLists = notableView.drawingSvgLayers;

    let items = notableView.toolItems;

    let config = NotableApplication.notableConfig;
    for (let item in items) {
        let it = item;
        //div
        config.toolItems[it].div.addEventListener('click', function () {

            if(notableView.currentItem && notableView.currentItem !== it) {
                items[notableView.currentItem].container.classList.remove('selected');
                $(items[notableView.currentItem].expanded).hide();
            }
            notableView.currentItem = it;
            ToolItemsEventsHandler(items[it]);
        });

        //subMode
        let subMode = config.toolItems[it].subMode;
        if(subMode) {
            for(let sm in subMode) {
                let _sm = sm;
                subMode[_sm].addEventListener('click', function (evt) {
                    evt.cancelBubble = true;
                    let currentSubMode = items[it].currentSubMode;
                    $(this).addClass('selected');
                    webProperties.ToolMode = _sm;
                    if(_sm !== currentSubMode) $(items[it].subMode[currentSubMode]).removeClass('selected');
                    items[it].currentSubMode = _sm;
                    if(_sm === 'hlBox') {
                        for(let sl in svgLayerLists) {
                            $(svgLayerLists[sl].div).removeClass('no-events');
                            $(svgLayerLists[sl].div).addClass('drawing-mode');
                            $(svgLayerLists[sl].div).removeClass('eraser-mode');
                            svgLayerLists[sl].div.classList.add('touch-none');
                        }
                        for(let dsl in drawingSvgLists) {
                            $(drawingSvgLists[dsl].div).addClass('no-events');
                        }
                    } else if(_sm === 'hlText') {
                        for(let sl in svgLayerLists) {
                            $(svgLayerLists[sl].div).addClass('no-events');
                            $(svgLayerLists[sl].div).removeClass('drawing-mode');
                            $(svgLayerLists[sl].div).removeClass('eraser-mode');
                            svgLayerLists[sl].div.classList.remove('touch-none');
                        }
                        for(let dsl in drawingSvgLists) {
                            $(drawingSvgLists[dsl].div).addClass('no-events');
                        }
                    }

                });
            }
        }

        //recentColor
        let recentColor = config.toolItems[it].recentColor;

        if(recentColor) {
            for(let rc in recentColor) {
                let _rc = rc;
                recentColor[_rc].addEventListener('click', function () {
                    let crc = items[it].currentRecentColor;

                    $(this).addClass('selected');

                    if(_rc !== crc) $(items[it].recentColor[crc]).removeClass('selected');

                    items[it].currentRecentColor = _rc;

                    webProperties.CurrentColor = $(this).css('background-color');
                });
            }
        }

        //extendedColor
        let extendedColor = config.toolItems[it].extendedColor;
        if(extendedColor) {
            for(let exc in extendedColor) {
                let _exc = exc;

                extendedColor[exc].addEventListener('click', function () {
                    let bg = $(this).css('background-color');
                    let cExColor = items[it].currentExColor;
                    $(this).addClass('selected');

                    if(_exc !== cExColor) $(items[it].extendedColor[cExColor]).removeClass('selected');
                    items[it].currentExColor = _exc;
                    webProperties.CurrentColor = bg;
                    //update recentColor
                    UpdateRecentColor(items[it], bg);

                });
            }
        }

        // thickness and fontSize
        let thickness = config.toolItems[it].thickness;
        let fontSize = config.toolItems[it].fontSize;
        thickness = thickness ? thickness : fontSize;
        if(thickness) {
            let div = thickness.div;
            div.addEventListener('click', function() {
                // $(thickness.subMenu.div).toggle();
                if($(this).is('.dropit-open')) $(this).removeClass('dropit-open');
                else $(this).addClass('dropit-open');
            });


            let thicknessItems = thickness.subMenu.items;
            let curThickness = null;
            $.each(thicknessItems, function() {
                this.addEventListener('click', function() {
                    let span = $(this).children('span')[0];
                    let text = $(span).text();
                    if(text.indexOf('px') !== -1) text = text.slice(0, text.indexOf('px'));
                    $(thickness.span).text(text);
                    if(curThickness !== this) {
                        $(curThickness).removeClass('selected');
                        $(this).addClass('selected');
                        curThickness = this;
                    }
                    $(div).removeClass('.dropit-open');
                });
            });
        }
    }
}
function UpdateRecentColor(item, bg) {
    let recentColor = item.recentColor;
    let currentRC = item.currentRecentColor;
    for(let rc in recentColor) {
        let color = $(recentColor[rc]).css('background-color');
        if(color === bg) {
            if(rc !== currentRC) {
                $(item.recentColor[currentRC]).removeClass('selected');
                item.currentRecentColor = rc;
                $(item.recentColor[rc]).addClass('selected');
            }
            return;
        }
    }
    if(bg !== $(recentColor.first).css('background-color')) {
        $(recentColor.third).css('background-color', $(recentColor.second).css('background-color'));
        $(recentColor.second).css('background-color', $(recentColor.first).css('background-color'));
        $(recentColor.first).css('background-color', bg);
        $(item.recentColor[currentRC]).removeClass('selected');
        $(recentColor.first).addClass('selected');
        item.currentRecentColor = 'first';
    }
}
function UpdateExtendColor(item, bg) {
    let exColor = item.extendedColor;
    for(let exc in exColor) {
        let _exc = exc;
        if($(exColor[_exc]).css('background-color') === bg) {
            $(exColor[item.currentExColor]).removeClass('selected');
            $(exColor[_exc]).addClass('selected');
            item.currentExColor = _exc;
            return;
        }
    }

}
function ToolItemsEventsHandler(item) {

    item.toggle();

    item.container.classList.add('selected');

    let toolItems = NotableApplication.notableConfig.toolItems;
    let svgLayerLists = NotableApplication.notableView.svgLayers;
    let drawingSvgLists = NotableApplication.notableView.drawingSvgLayers;
    if(svgLayerLists.length === 0) return ;

    switch(item.div) {
        case toolItems.selectText.div: {
            for(let sl in svgLayerLists) {
                $(svgLayerLists[sl].div).addClass('no-events');
                $(svgLayerLists[sl].div).removeClass('drawing-mode');
                $(svgLayerLists[sl].div).removeClass('eraser-mode');
                $(svgLayerLists[sl].div).removeClass('touch-none');
            }
            for(let dsl in drawingSvgLists) {
                $(drawingSvgLists[dsl].div).addClass('no-events');
            }
            webProperties.ToolMode = 'selectText';
            webProperties.EventMode = EVENTS_MODE_ENUM.MOD_SELECT_TEXT;
            break;
        }
        case toolItems.eraser.div: {
            for(let sl in svgLayerLists) {
                $(svgLayerLists[sl].div).removeClass('no-events');
                $(svgLayerLists[sl].div).removeClass('drawing-mode');
                $(svgLayerLists[sl].div).addClass('eraser-mode');
                svgLayerLists[sl].div.classList.add('touch-none');
            }
            for(let dsl in drawingSvgLists) {
                $(drawingSvgLists[dsl].div).addClass('no-events');
            }
            break;
        }
        case toolItems.drawing.div: {
            webProperties.ToolMode = 'drawing'
            for(let sl in svgLayerLists) {
                $(svgLayerLists[sl].div).addClass('no-events');
                $(svgLayerLists[sl].div).removeClass('drawing-mode');
                $(svgLayerLists[sl].div).removeClass('eraser-mode');
                $(svgLayerLists[sl].div).removeClass('touch-none');
            }
            for(let dsl in drawingSvgLists) {
                $(drawingSvgLists[dsl].div).removeClass('no-events');
                $(drawingSvgLists[dsl].div).addClass('drawing-mode');
            }
            break;
        }
        case toolItems.highLight.div:{
            if(item.currentSubMode === 'hlText') {
                for(let sl in svgLayerLists) {
                    $(svgLayerLists[sl].div).addClass('no-events');
                    $(svgLayerLists[sl].div).removeClass('drawing-mode');
                    $(svgLayerLists[sl].div).removeClass('eraser-mode');
                    $(svgLayerLists[sl].div).removeClass('touch-none');
                }
                for(let dsl in drawingSvgLists) {
                    $(drawingSvgLists[dsl].div).addClass('no-events');
                    $(drawingSvgLists[dsl].div).removeClass('drawing-mode');
                }
            } else if(item.currentSubMode === 'hlBox') {
                for(let sl in svgLayerLists) {
                    $(svgLayerLists[sl].div).removeClass('no-events');
                    $(svgLayerLists[sl].div).addClass('drawing-mode');
                    $(svgLayerLists[sl].div).removeClass('eraser-mode');
                    $(svgLayerLists[sl].div).removeClass('touch-none');
                }
                for(let dsl in drawingSvgLists) {
                    $(drawingSvgLists[dsl].div).addClass('no-events');
                    $(drawingSvgLists[dsl].div).removeClass('drawing-mode');
                }
            }
            break;
        }
        case toolItems.strikeThrough.div: {
            webProperties.ToolMode = 'strikeThrough';
            for(let sl in svgLayerLists) {
                $(svgLayerLists[sl].div).addClass('no-events');
                $(svgLayerLists[sl].div).removeClass('drawing-mode');
                $(svgLayerLists[sl].div).removeClass('eraser-mode');
                $(svgLayerLists[sl].div).removeClass('touch-none');
            }
            for(let dsl in drawingSvgLists) {
                $(drawingSvgLists[dsl].div).addClass('no-events');
                $(drawingSvgLists[dsl].div).removeClass('drawing-mode');
            }
            break;
        }
        case toolItems.underLine.div: {
            webProperties.ToolMode = 'underLine';
            for(let sl in svgLayerLists) {
                $(svgLayerLists[sl].div).addClass('no-events');
                $(svgLayerLists[sl].div).removeClass('drawing-mode');
                $(svgLayerLists[sl].div).removeClass('eraser-mode');
                $(svgLayerLists[sl].div).removeClass('touch-none');
            }
            for(let dsl in drawingSvgLists) {
                $(drawingSvgLists[dsl].div).addClass('no-events');
                $(drawingSvgLists[dsl].div).removeClass('drawing-mode');
            }
            break;
        }
        case toolItems.textBox.div: {
            webProperties.ToolMode = 'textBox';
            for(let sl in svgLayerLists) {
                $(svgLayerLists[sl].div).addClass('no-events');
                $(svgLayerLists[sl].div).removeClass('drawing-mode');
                $(svgLayerLists[sl].div).removeClass('eraser-mode');
                $(svgLayerLists[sl].div).removeClass('touch-none');
            }
            for(let dsl in drawingSvgLists) {
                $(drawingSvgLists[dsl].div).addClass('no-events');
                $(drawingSvgLists[dsl].div).removeClass('drawing-mode');
            }
            break;
        }
        case toolItems.comment.div: {
            webProperties.ToolMode = 'comment';
            for(let sl in svgLayerLists) {
                $(svgLayerLists[sl].div).addClass('no-events');
                $(svgLayerLists[sl].div).removeClass('drawing-mode');
                $(svgLayerLists[sl].div).removeClass('eraser-mode');
                $(svgLayerLists[sl].div).removeClass('touch-none');
            }
            for(let dsl in drawingSvgLists) {
                $(drawingSvgLists[dsl].div).addClass('no-events');
                $(drawingSvgLists[dsl].div).removeClass('drawing-mode');
            }
            break;
        };
        case toolItems.insertImage.div: {
            webProperties.ToolMode = 'insertImage';
            for(let sl in svgLayerLists) {
                $(svgLayerLists[sl].div).addClass('no-events');
                $(svgLayerLists[sl].div).removeClass('drawing-mode');
                $(svgLayerLists[sl].div).removeClass('eraser-mode');
                $(svgLayerLists[sl].div).removeClass('touch-none');
            }
            for(let dsl in drawingSvgLists) {
                $(drawingSvgLists[dsl].div).addClass('no-events');
                $(drawingSvgLists[dsl].div).removeClass('drawing-mode');
            }
            isWMDiv = false;
        }
        case toolItems.waterMark.div: {
            if(isWMDiv) webProperties.ToolMode = 'waterMark';
            for(let sl in svgLayerLists) {
                $(svgLayerLists[sl].div).addClass('no-events');
                $(svgLayerLists[sl].div).removeClass('drawing-mode');
                $(svgLayerLists[sl].div).removeClass('eraser-mode');
                $(svgLayerLists[sl].div).removeClass('touch-none');
            }
            for(let dsl in drawingSvgLists) {
                $(drawingSvgLists[dsl].div).addClass('no-events');
                $(drawingSvgLists[dsl].div).removeClass('drawing-mode');
            }


            let fileInput = document.createElement('input');
            $(fileInput).attr('type', 'file');
            $(fileInput).attr('accept', 'image/*');

            $(fileInput).click();

            let file = null;

            $(fileInput).change(function() {
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_DRAW_IMG;
                file = $(fileInput).get(0).files[0];
                imgFileUrl = window.URL.createObjectURL(file);
                imgFileName = file.name;

                // upload image
                let formData = new FormData();
                formData.append('file', file);
                formData.append('blobUrl', imgFileUrl);
                formData.append('type', 'image');
                $.ajax({
                    url: '/uploadpdffile',
                    type: 'POST',
                    cache: false,
                    data: formData,
                    processData: false,
                    contentType: false
                }).done(function(res){
                    console.log(res);
                }).fail(function(res){});
            });
            isWMDiv = true;
            break;
        }
        default: {
            for(let sl in svgLayerLists) {
                svgLayerLists[sl].div.classList.remove('no-events');
                $(svgLayerLists[sl].div).addClass('drawing-mode');
                $(svgLayerLists[sl].div).removeClass('eraser-mode');
                svgLayerLists[sl].div.classList.add('touch-none');
            }
            for(let dsl in drawingSvgLists) {
                $(drawingSvgLists[dsl].div).addClass('no-events');
            }
        }
    }
}
function MoveElement(elem) {
    let dxy = webProperties.getCoordinatesDis();
    let dx = dxy.dx;
    let dy = dxy.dy;

    elem.dx += dx;
    elem.dy += dy;
    elem.div.setAttribute('transform', 'translate('+ elem.dx + ', ' + elem.dy + ')');
}
function TextHighLightHandler() {
    let selection = window.getSelection();
    if(selection.isCollapsed) return;

    let range = selection.getRangeAt(0);
    if(range.isCollapsed) return;

    let textLayer = GetAncestorContainer(range);
    let hwContainer = textLayer.nextSibling;
    if(!($(hwContainer).is('.notableAnnotationLayer-bottom'))) {
        console.error('leijie: layer not match...QAQ');
        return;
    }

    let hlWrapper = document.createElement('highlight-wrapper');
    $(hlWrapper).addClass('highlight-wrapper');
    hwContainer.appendChild(hlWrapper);

    // console.log(range.toString());
    let string = range.toString();
    // Highlight start container
    let hlRange = new Range();
    hlRange.setStart(range.startContainer, range.startOffset);
    if(range.startContainer === range.endContainer) {
        hlRange.setEnd(range.endContainer, range.endOffset);
        AddHighLightWrapperFromRange(string, hlRange, hlWrapper, hwContainer);
    } else {
        hlRange.setEnd(range.startContainer, range.startContainer.length);
        AddHighLightWrapperFromRange(string, hlRange, hlWrapper, hwContainer);
        let node = range.startContainer.parentElement.nextSibling;
        while(node !== range.endContainer.parentElement) {
            hlRange.selectNode(node);
            AddHighLightWrapperFromRange(string, hlRange, hlWrapper, hwContainer);
            node = node.nextSibling;
        }
        // End Container
        hlRange.setStart(range.endContainer, 0);
        hlRange.setEnd(range.endContainer, range.endOffset);
        AddHighLightWrapperFromRange(string, hlRange, hlWrapper, hwContainer);
    }
    hlRange.detach();
}
function AddHighLightWrapperFromRange(string, range, hlWrapper, container) {

    let notableView = NotableApplication.notableView;
    if(range.isCollapsed) return;
    let clientRect = range.getBoundingClientRect();

    let anContainer = GetAncestorContainer(range);
    // Create highlight div
    let marginLeft = $(anContainer).offset().left;
    let marginTop = $(anContainer).offset().top;

    switch(webProperties.ToolMode) {
        case 'hlText': {
            let hlDiv = new _notable_hltext_div_.TextHLDiv({
                containerId: webProperties.CurPageNum,
                toolItem: NotableApplication.notableConfig.toolItems.highLight,
                className: 'highlight',
                string: string,
                left: clientRect.left - marginLeft,
                top: clientRect.top - marginTop + clientRect.height * 0.1,
                width: clientRect.width,
                height: clientRect.height * 0.8,
                hlWrapper: hlWrapper,
                container: container
            });
            // Add Events
            notableView.hlRects.push(hlDiv);
            TextHLDivEventsBind(hlDiv);
            break;
        }
        case 'strikeThrough': {
            let stDiv = new _notable_hltext_div_.TextHLDiv({
                containerId: webProperties.CurPageNum,
                backgroundColor: 'none',
                toolItem: NotableApplication.notableConfig.toolItems.strikeThrough,
                string: string,
                left: clientRect.left - marginLeft,
                top: clientRect.top - marginTop + clientRect.height * 0.1,
                width: clientRect.width,
                height: clientRect.height * 0.8,
                hlWrapper: hlWrapper,
                container: container
            });
            let lineDiv = new _notable_hltext_div_.TextHLDiv({
                containerId: webProperties.CurPageNum,
                toolItem: NotableApplication.notableConfig.toolItems.strikeThrough,
                className: 'strikethrough',
                string: string,
                isLine: true,
                opacity: 1,
                left: stDiv.left,
                top: stDiv.top + stDiv.height / 2,
                width: stDiv.width,
                height: 2,
                marginTop: -1,
                hlWrapper: hlWrapper,
                container: container
            });
            notableView.hlRects.push(stDiv);
            notableView.hlRects.push(lineDiv);
            TextHLDivEventsBind(stDiv);
            break;
        }
        case 'underLine': {
            let ulDiv = new _notable_hltext_div_.TextHLDiv({
                containerId: webProperties.CurPageNum,
                backgroundColor: 'none',
                toolItem: NotableApplication.notableConfig.toolItems.underLine,

                string: string,
                left: clientRect.left - marginLeft,
                top: clientRect.top - marginTop + clientRect.height * 0.1,
                width: clientRect.width,
                height: clientRect.height * 0.8,
                hlWrapper: hlWrapper,
                container: container
            });
            let lineDiv = new _notable_hltext_div_.TextHLDiv({
                containerId: webProperties.CurPageNum,

                toolItem: NotableApplication.notableConfig.toolItems.underLine,

                className: 'underline',
                string: string,
                isLine: true,
                opacity: 1,
                left: ulDiv.left,
                top: ulDiv.top + ulDiv.height,
                width: ulDiv.width,
                height: 2,
                marginTop: -2,
                hlWrapper: hlWrapper,
                container: container
            });
            notableView.hlRects.push(ulDiv);
            notableView.hlRects.push(lineDiv);
            TextHLDivEventsBind(ulDiv);
            break;
        }
    }

}
function GetAncestorContainer(range) {
    let container = range.commonAncestorContainer;
    if(container.nodeType !== 1) {
        container = container.parentElement;
        container = container.offsetParent;
    }
    return container;
}
function RemoveHLDiv(hlDiv) {
    if(!hlDiv) return;
    hlDiv.container.removeChild(hlDiv.hlWrapper);

    let hlRects = NotableApplication.notableView.hlRects;
    for(let i = 0; i < hlRects.length; i++) {
        if(hlRects[i].hlWrapper === hlDiv.hlWrapper) {
            hlRects.splice(i, 1);
            i--;
        }
    }
}
function TextHLDivEventsBind(hlDiv) {
    let div = hlDiv.div;
    let timeId = null;
    div.addEventListener('mouseover', function() {
        $(hlDiv.hlWrapper).addClass('spotlight');

        webProperties.CurElem = hlDiv;
        if(hlDiv.inComment) return;
        timeId = setTimeout(function() {
            NotableApplication.notableView.toolTipsHandler(hlDiv);
        }, 600);

    });
    div.addEventListener('mouseout', function() {
        $(hlDiv.hlWrapper).removeClass('spotlight');
        // if (hlDiv.backgroundColor === 'none') return;
        if(hlDiv.inComment) return;
        if(timeId) clearTimeout(timeId);
        window.timeout1 = setTimeout(function() {
            NotableApplication.notableView.hiddenToolTips();
        }, 100);
    });
}
function GetCurHlDiv(clientXY) {
    let hlRects = NotableApplication.notableView.hlRects;
    // return current highlight div which is touched
    if(hlRects.length === 0) return null;

    let x = clientXY.x,
        y = clientXY.y;

    let resDiv = null;
    $.each(hlRects, function() {
        if((x >= this.left && x <= this.left + this.width) &&
            (y >= this.top && y <= this.top + this.height)) {
            resDiv = this;
            return ;
        }
    });
    return resDiv;

}
function AddTextBox(e, notableView) {
    let target = e.target;
    if(!$(target).is('.textLayer')) target = $(target).parent('.textLayer')[0];

    let marginLeft = $(target).offset().left;
    let marginTop = $(target).offset().top;

    let container = target.nextSibling.nextSibling;
    if(!$(container).is('.notableAnnotationLayer-top')) {
        console.error('leijie: annotation layer is no matched...QAQ');
        return;
    }
    // notableView.curTextBox.editor.blur();
    // if(notableView.curTextBox) {
    //     notableView.curTextBox.editor.enable(false);
    // }
    let textBox = new _notable_text_box_.TextBox({
        container: container,
        notableView: notableView,
        left: e.clientX - marginLeft,
        top: e.clientY - marginTop,
    });
    // textBox.editor.update();
    notableView.curTextBox = textBox;
    notableView.textBoxs.push(textBox);
}
function AddComment(e, notableView) {
    let target = e.target;
    if(!$(target).is('.textLayer')) target = $(target).parent('.textLayer')[0];

    let marginLeft = $(target).offset().left;
    let marginTop = $(target).offset().top;

    let container = target.nextSibling.nextSibling;
    if(!$(container).is('.notableAnnotationLayer-top')) {
        console.error('leijie: annotation layer is no matched...QAQ');
        return;
    }

    let comment = new _notable_comment_.Comment({
        containerId: webProperties.CurPageNum,
        comContainer: NotableApplication.notableConfig.commentsLayer,
        container: container,
        bgColor: webProperties.CurrentColor,
        left: e.clientX - marginLeft,
        top: e.clientY - marginTop,
        width: 28,
        height: 28,
    });
    // Set style
    $.each(notableView.comments, function() {
        $(this.commentBody).addClass('dim-comment');
    });
    notableView.curComment = comment;
    notableView.comments.push(comment);
    CommentEventsBind(comment, notableView);
}
function CommentEventsBind(comment, notableView){
    if(!comment.isMark) {
        let pointer = comment.pointer;
        let colorSelector = comment.colorSelector;

        let timeId = undefined;

        $(pointer).on('mousedown', function(evt) {
            evt.cancelBubble = true;
            let e = evt || window.event;

            webProperties.PreviousC.x = e.clientX;
            webProperties.PreviousC.y = e.clientY;

            DimComments(comment, notableView);

            webProperties.EventMode = EVENTS_MODE_ENUM.MOD_MOVE_COM;
            notableView.curComment = comment;
        });
        $(pointer).click(function() {
            if(webProperties.ToolMode === 'eraserAll') {
                comment._remove();
                notableView.comments.splice(notableView.comments.indexOf(comment), 1);
            }
        });
        pointer.addEventListener('mouseover', function() {
            if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_ERASER_ALL) {
                comment._remove();
                notableView.comments.splice(notableView.comments.indexOf(comment), 1);
            }
            timeId = setTimeout(function () {
                $(comment.pointerWrapper).addClass('hover');
            }, 500);
            $(this).addClass('spotlight');
            notableView.curComment = comment;
        });
        pointer.addEventListener('mouseout', function() {
            //
            if(timeId) clearTimeout(timeId);
            webProperties.TimeoutID = setTimeout(() => {
                $(comment.pointerWrapper).removeClass('hover');
            }, 50);
            if($(comment.commentBody).is('.aligned')) return;
            $(this).removeClass('spotlight');
        });
        colorSelector.addEventListener('mouseover', function(evt) {

            notableView.curComment = comment;
            if(webProperties.TimeoutID) {
                clearTimeout(webProperties.TimeoutID);
                webProperties.TimeoutID = null;
            };
        });
        $(colorSelector).on('mouseleave', function(evt) {
            evt.cancelBubble = true;
            // evt.stopPropagation();
            $(comment.pointerWrapper).removeClass('hover');
        })
    }

    //TODO(): Color Selector Events Bind
    // Color Selector
    $.each(comment.cells, function() {
        $(this).click(function() {
            let bg = $(this).css('background-color');
            $(comment.pointer).css('background-color', bg);
            if($(comment.comment).text() === '') comment.comment.focus();
        });
    });
    // Comment blur
    $(comment.comment).blur((evt) => {
        if($(comment.comment).text() === '') {
           // Remove
            if(TargetIs(window.COMpointerTarget, '.pointer') ||
                TargetIs(window.COMpointerTarget, '.highlight-color-selector')) return;
            comment._remove();
            notableView.comments.splice(notableView.comments.indexOf(comment), 1);
            $.each(comment.hlDivs, function() {
                this.inComment = false;
            });
            return;
       } else {
            comment.comContent = $(comment.comment).text();
        }
    });
    $(comment.commentBody).on('mouseenter', function() {
        $(this).addClass('spotlight');
        if(comment.isMark) {
            let hlWrapper = comment.hlDivs[0].hlWrapper;
            $(hlWrapper).addClass('spotlight');
        } else {
            $(comment.pointer).addClass('spotlight');
        }
    });
    $(comment.commentBody).on('mouseleave', function() {
        $(this).removeClass('spotlight');

        if(comment.isMark) {
            let hlWrapper = comment.hlDivs[0].hlWrapper;
            $(hlWrapper).removeClass('spotlight');
        } else {
            if(notableView.curComment === comment) return;
            $(comment.pointer).removeClass('spotlight');
        }
    });
    $(comment.commentBody).click(()=>{
        $(comment.commentBody).addClass('aligned');
        $(comment.commentBody).removeClass('dim-comment');

        DimComments(comment, notableView);

        if(notableView.curComment === comment) return;
        if(notableView.curComment.isMark){
            let hlWrapper = notableView.curComment.hlDivs[0].hlWrapper;
            $(hlWrapper).removeClass('spotlight');
        } else {
            $(notableView.curComment.pointer).removeClass('spotlight');
        }
        notableView.curComment = comment;
    });

    $($(comment.commentBody).find('.destroy')[0]).click(()=>{
        comment._remove();
        notableView.comments.splice(notableView.comments.indexOf(comment), 1);
        if(comment.isMark) {
            let hlWrapper = comment.hlDivs[0].hlWrapper;
            $(hlWrapper).removeClass('spotlight');
        }
    });

}
function DimComments(comment, notableView) {
    if (notableView.comments.length !== 0) {
        $.each(notableView.comments, function () {
            if(this !== comment) {
                $(this.commentBody).removeClass('aligned');
                $(this.commentBody).addClass('dim-comment');
            } else {
                $(comment.commentBody).addClass('aligned');
                $(comment.commentBody).removeClass('dim-comment');
            }

        });
    }
}
window.notableCreateImage =  function() {
    let curImage = NotableApplication.notableView.curImage;
    if(curImage && !curImage.drawFinished) {
        curImage.container = document.querySelector('#notableAnnotationLayer'+webProperties.CurPageNum+'-bottom');
        curImage.preContainer = document.querySelector('#page' + webProperties.CurPageNum);
        $(curImage.preContainer).append(curImage.preDiv);
        curImage.containerId = webProperties.CurPageNum;
        return;
    }
    let svg = document.querySelector('#painting' + webProperties.CurPageNum);
    let marginLeft = $(svg).offset().left;
    let marginTop = $(svg).offset().top;
    let type = webProperties.ToolMode;

    let img = new Image();
    img.src = imgFileUrl;
    let imgWidth = null;
    let imgHeight = null;
    if(img.complete) {
        imgWidth = img.width;
        imgHeight = img.height;
        if(imgWidth > MAX_IMG_WIDTH) {
            imgHeight = imgHeight * (MAX_IMG_WIDTH / imgWidth);
            imgWidth = MAX_IMG_WIDTH;
        } else if(imgHeight > MAX_IMG_HEIGHT) {
            imgWidth = imgWidth * (MAX_IMG_HEIGHT / imgHeight);
            imgHeight = MAX_IMG_HEIGHT;
        }

        let image = new _notable_image_.Image({
            containerId: webProperties.CurPageNum,
            type: type,
            name: imgFileName,
            notableView: NotableApplication.notableView,
            preContainer: document.querySelector('#page' + webProperties.CurPageNum),
            container: document.querySelector('#notableAnnotationLayer'+webProperties.CurPageNum+'-bottom'),
            left: webProperties.PreviousC.x - marginLeft,
            top: webProperties.PreviousC.y - marginTop,
            imgUrl: imgFileUrl,
            imgWidth: imgWidth,
            imgHeight: imgHeight,
        });
        NotableApplication.notableView.curImage = image;
        NotableApplication.notableView.images.push(image);
    } else {
        img.onload = function() {
            imgWidth = img.width;
            imgHeight = img.height;

            // Resize img size
            if(imgWidth > MAX_IMG_WIDTH) {
                imgHeight = imgHeight * (MAX_IMG_WIDTH / imgWidth);
                imgWidth = MAX_IMG_WIDTH;
            } else if(imgHeight > MAX_IMG_HEIGHT) {
                imgWidth = imgWidth * (MAX_IMG_HEIGHT / imgHeight);
                imgHeight = MAX_IMG_HEIGHT;
            }

            let image = new _notable_image_.Image({
                containerId: webProperties.CurPageNum,
                type: type,
                name: imgFileName,
                notableView: NotableApplication.notableView,
                preContainer: document.querySelector('#page' + webProperties.CurPageNum),
                container: document.querySelector('#notableAnnotationLayer'+webProperties.CurPageNum+'-bottom'),
                left: webProperties.PreviousC.x - marginLeft,
                top: webProperties.PreviousC.y - marginTop,
                imgUrl: imgFileUrl,
                imgWidth: imgWidth,
                imgHeight: imgHeight,
            });
            NotableApplication.notableView.curImage = image;
            NotableApplication.notableView.images.push(image);
        }
    }
};

function RemoveImage(img) {
    $(img.div).remove();
    let index = NotableApplication.notableView.images.indexOf(img);
    NotableApplication.notableView.images.splice(index, 1);
}

function GetCurImage(x, y) {

    let images = NotableApplication.notableView.images;
    if(images.length === 0) return;

    for(let i = 0; i < images.length; i++) {
        let img = images[i];

        let rect = img.div.getBoundingClientRect();

        if(x >= rect.left && x <= rect.left + rect.width) {
            if(y >= rect.top && y <= rect.top + rect.height) {
                return img;
            }
        }
    }
    return null;
}

exports.NotableApplication = NotableApplication;
}),

// 2 notableView
(function (module, exports, __webpack_require_) {

Object.defineProperty(exports, '__exModule', {value: true});
exports.NotableView = undefined;

let _base_item_ = __webpack_require_(3);

const _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

let webProperties = window.webProperties;
let EVENTS_MODE_ENUM = webProperties.EVENTS_MODE_ENUM;


let NotableView = function () {
    function NotableView(options) {
        let _this = this;

        _classCallCheck(this, NotableView);

        this.config = options;

        this.pages = [];

        // this._textLayers = [];
        // this.curTextLayer = null;

        this.toolItems = {};
        this._annotationLayerBottoms = [];
        this._annotationLayerTops = [];
        this._svgLayers = [];
        this._drawingSvgLayers = [];


        this.currentSvgLayer = 0;
        this.curDrawingSvgLayer = null;
        this.currentItem = null;

        this.hlRects = [];

        this.curTextBox = null;
        this.textBoxs = [];

        this.curComment = null;
        this.comments = [];

        this.curImage = null;
        this.images = [];

        this.toolItems = initializeToolItems(options.toolItems);
    }

    _createClass(NotableView, [{
        key: 'svgLayers',
        get: function get() {
            return this._svgLayers;
        }
    }, {
        key: 'annotationLayerBottoms',
        get: function get() {
            return this._annotationLayerBottoms;
        }
    }, {
        key: 'annotationLayerTops',
        get: function get() {
            return this._annotationLayerTops;
        }
    }, {
        key: 'drawingSvgLayers',
        get: function get() {
            return this._drawingSvgLayers;
        }
    }, {
        key: 'textLayers',
        get: function get() {
            return this._textLayers;
        }
    },
        {
        key: 'getCurrentSvgLayer',
        value: function getCurrentSvgLayer() {
            return this.currentSvgLayer;
        }
    }, {
        key: 'getCurDrawingSvgLayer',
        value: function getCurDrawingSvgLayer(){
            return this.curDrawingSvgLayer;
        }
    },
        {
        key: 'svgEventsBind',
        value: function svgEventsBind(svg) {
            let _this = this;

            let div = svg.div;

            div.addEventListener('mousedown', function(evt) {
                let e = evt || window.event;
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                switch(webProperties.ToolMode) {
                    case 'shapesRect':
                    case 'hlBox': {
                        webProperties.EventMode = EVENTS_MODE_ENUM.MOD_DRAW_RECT;
                        break;
                    }
                    case 'eraserAll': {
                        webProperties.EventMode = EVENTS_MODE_ENUM.MOD_ERASER_ALL;
                        break;
                    }
                    case 'shapesCircle': {
                        webProperties.EventMode = EVENTS_MODE_ENUM.MOD_DRAW_S_CIRCLE;
                        break;
                    }
                    case 'shapesLine':{
                        webProperties.EventMode = EVENTS_MODE_ENUM.MOD_DRAW_S_LINE;
                        break;
                    }
                    default: {
                        webProperties.EventMode = EVENTS_MODE_ENUM.MOD_NULL;
                    }
                }
                _this.currentSvgLayer = svg;

                // started = true;
            });
        }
    }, {
        key: 'drawingSvgEventsBind',
        value: function drawingSvgEventsBind(svg) {
            let _this = this;
            let div = svg.div;

            div.addEventListener('mousedown', function(evt) {
                let e = evt || window.event;
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;

                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_DRAW_POLYLINE;
                _this.curDrawingSvgLayer = svg;
            });
        }
    }, {
        key: 'resizeElements',
        value: function resizeElements(id, oldScale, newScale) {
            let ins = (newScale / oldScale);
            $.each(this.hlRects, function() {
                if(this.containerId !== id) return;
                this.top *= ins;
                this.left *= ins;
                this.width *= ins;
                this.height *= ins;
                if(this.marginTop) this.marginTop *= ins;
                this.update();
            });
            $.each(this.comments, function() {
                if(this.containerId !== id) return;
                let pointer = this.pointer;
                this.top *= ins;
                this.left *= ins;
                this.width *= ins;
                this.height *= ins;
                this.update();
            });
            $.each(this.images, function() {
                if (this.containerId !== id) return;
                this.top *= ins;
                this.left *= ins;
                this.imgWidth *= ins;
                this.imgHeight *= ins;
                this.update();
            });
        }
    }, {
        key: 'toolTipsHandler',
        value: function toolTipsHandler(obj) {
            let toolTip = this.config.toolTip.div;
            $(toolTip).css('display', 'block');

            let colorPicker = this.config.toolTip.colorPicker;
            let fillColor = this.config.toolTip.fillColor;
            let strokeWidth = this.config.toolTip.strokeWidth;
            let opacity = this.config.toolTip.opacity;
            let copy = this.config.toolTip.copy;
            let comment = this.config.toolTip.comment;

            let left = $(obj.div).offset().left;
            let top = $(obj.div).offset().top;
            this.updateToolTipLoc(toolTip, left, top);

            switch(obj.constructor.name) {
                case 'NotablePolyline':
                case 'ShapesLine':
                case 'ShapesCircle':
                case 'NotableRect': {
                    // Update location
                    $(colorPicker).removeClass('hidden');
                    $(fillColor).removeClass('hidden');
                    $(strokeWidth).removeClass('hidden');
                    $(opacity).removeClass('hidden');
                    $(copy).addClass('hidden');
                    $(comment).addClass('hidden');
                    // Initail
                    let color;
                    let fillC;
                    let op;

                    if($(obj.div).attr('fill') !== 'none') {
                        color = obj.fill;
                        webProperties.isFill = true;
                        $(strokeWidth).val('string:fill');

                        fillC = obj.fill;
                        op = obj.fillOpacity;
                    } else {
                        color = obj.stroke;
                        webProperties.isFill = false;
                        let sw = obj.strokeWidth;
                        let string = 'string:' + sw + 'px';
                        $(strokeWidth).val(string);

                        fillC = 'white';
                        op = obj.strokeOpacity;
                    }
                    $(colorPicker).css('background-color', color);
                    $($(fillColor).children()[0]).css('color', fillC);
                    webProperties.CurrentColor = color;
                    $(opacity).val('number:' + op);
                    break;
                }
                case 'TextHLDiv': {
                    $(colorPicker).removeClass('hidden');
                    $(fillColor).addClass('hidden');
                    $(strokeWidth).addClass('hidden');
                    $(opacity).addClass('hidden');
                    $(copy).removeClass('hidden');
                    $(comment).removeClass('hidden');

                    let color = obj.backgroundColor;
                    console.log(obj);
                    console.log(color);
                    $(colorPicker).css('background-color', color);

                    break;
                }
                case 'Image': {
                    $(colorPicker).addClass('hidden');
                    $(fillColor).addClass('hidden');
                    $(strokeWidth).addClass('hidden');
                    $(opacity).removeClass('hidden');
                    $(copy).addClass('hidden');
                    $(comment).addClass('hidden');

                    let op = obj.opacity;
                    $(opacity).val('number:' + op);
                }
            }
        }
    }, {
        key: 'hiddenToolTips',
        value: function hiddenToolTips() {
            let toolTip = this.config.toolTip.div;
            $(toolTip).css('display', 'none');
        }
    }, {
        key: 'updateToolTipLoc',
        value: function updateToolTipLoc(toolTip, left, top) {
            let marginTop = $('#page1').offset().top;
            if(marginTop < 0) marginTop = -marginTop + 33;
            else marginTop = 0;
            $(toolTip).css('left', left + 60);
            $(toolTip).css('top', top  + marginTop - 60);
        }
    }, {
        key: 'clear',
        value: function clear() {
            this._annotationLayerBottoms.length = 0;
            this._annotationLayerTops.length = 0;
            this._svgLayers.length = 0;
            this._drawingSvgLayers.length = 0;
            this.hlRects.length = 0;
            this.textBoxs.length = 0;
            this.comments.length = 0;
            this.images.length = 0;
        }
    }
    ]);

    return NotableView;
}();

function initializeToolItems(options) {
    let items = {};
    for (let option in options) {
        items[option] = new _base_item_.BaseItem(option, options[option], options);
    }
    return items;
}

exports.NotableView = NotableView;

}),

//  3  base item
(function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {value: true});

exports.BaseItem = undefined;

const _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

let BaseItem = function () {
    function BaseItem(name, option, options) {
        // let _this = this;
        _classCallCheck(this, BaseItem);
        this.config = options;
        this.name = name;
        this.container = option.container;
        this.div = option.div;
        this.expanded = option.expanded;

        this.subMode = option.subMode;
        this.recentColor = option.recentColor;
        this.extendedColor = option.extendedColor;
        //set the first subMode as default subMode
        this.currentSubMode = null;
        this.currentRecentColor = null;
        this.currentExColor = null;


        this.initializeItem();
    }
    _createClass(BaseItem, [{
        key: 'toggle',
        value: function toggle() {
            if(this.expanded) $(this.expanded).toggle();
            if(this.subMode) {
                let sm = this.subMode[this.currentSubMode];
                $(sm).addClass('selected');
                webProperties.ToolMode = this.currentSubMode;
            }
            if(this.recentColor) {
                let rc = this.recentColor[this.currentRecentColor];
                $(rc).addClass('selected');
                webProperties.CurrentColor = $(rc).css('background-color');
            }
            if(this.extendedColor) {
                let color = $(this.recentColor[this.currentRecentColor]).css('background-color');
                for(let exc in this.extendedColor) {
                    let exColor = $(this.extendedColor[exc]).css('background-color');
                    if(exColor === color) {
                        this.currentExColor = exc;
                        $(this.extendedColor[exc]).addClass('selected');
                        break;
                    }
                }
            }
        }
    }, {
        key: 'initializeItem',
        value: function initializeItem () {
            if(this.subMode) this.currentSubMode = Object.keys(this.subMode)[0];
            if(this.recentColor) this.currentRecentColor = Object.keys(this.recentColor)[0];
        }
    }
    ]);

    return BaseItem;
}();
exports.BaseItem = BaseItem;

}),

// 4 notableSVGLayer

(function (module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {value: true});
exports.NotableSVGLayer = undefined;

const _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

let _noatble_rect_ = __webpack_require__(5);

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

let webProperties = window.webProperties;
let EVENTS_MODE_ENUM = webProperties.EVENTS_MODE_ENUM;

let NotableSVGLayer = function () {

    function NotableSVGLayer(options) {
        _classCallCheck(this, NotableSVGLayer);

        this.notableView = options.notableView;

        this.container = options.container;
        this.id = options.id;
        this.div = options.div;

        this._rects = [];
        this.currentRect = null;

        //poly line
        this.shapeSvg = options.shapeSvg;
        this.polyLines = [];
        this.curPolyLine = null;

        // shapes circles
        this.shapesCircles = [];
        this.curShapesCircle = null;

        // shapes lines
        this.shapesLines = [];
        this.curShapesLine = null;

    }

     _createClass(NotableSVGLayer, [{
        key: 'rectEventsBind',
        value: function rectEventsBind(rect) {
            let _this = this;
            let div = rect.div;
            let timeId = null;
            div.addEventListener('mousedown', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                if(timeId) clearTimeout(timeId);
                if(webProperties.ToolMode === 'eraserAll') {
                    _this.removeRect(rect);
                    return;
                }
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_MOVE_RECT;
                _this.currentRect = rect;
                webProperties.CurElem = rect;
            });
            div.addEventListener('mouseover', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;

                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_ERASER_ALL) {
                    _this.removeRect(rect);
                    return ;
                }

                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_DRAW_RECT) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_MOVE_RECT) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_RESIZE_RECT) return;

                rect.addCircles();
                timeId = setTimeout(function() {
                    _this.notableView.toolTipsHandler(rect);
                }, 500);
                _this.currentRect = rect;
                webProperties.CurElem = rect;
            });
            div.addEventListener('mouseout', function() {
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_RESIZE_RECT) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_ERASER_ALL) return;
                webProperties.TimeoutID = setTimeout(()=>{
                        rect.removeCircles();
                }, 10);
                if(timeId) clearTimeout(timeId);
                window.timeout1 = setTimeout(function() {
                    _this.notableView.hiddenToolTips();
                }, 100);
            });
        }
    }, {
        key: 'polyLineEventsBind',
        value: function polyLineEventsBind(polyLine) {
            let _this = this;
            let div = polyLine.div;
            let timeId = null;

            div.addEventListener('mousedown', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                if(timeId) clearTimeout(timeId);
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_ERASER_ALL) {
                    _this.removePolyLine(polyLine);
                    return;
                }
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_MOVE_POLYLINE;
                _this.curPolyLine = polyLine;
                webProperties.CurElem = polyLine;
            });
            div.addEventListener('mouseover', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_MOVE_POLYLINE) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_ERASER_ALL) {
                    _this.removePolyLine(polyLine);
                    return ;
                }
                $(polyLine.div).attr('stroke', webProperties.DefaultSelectedColor);

                timeId = setTimeout(function() {
                    _this.notableView.toolTipsHandler(polyLine);
                }, 600);
                _this.curPolyLine = polyLine;
                webProperties.CurElem = polyLine;
            });
            div.addEventListener('mouseout', function(evt) {
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_MOVE_POLYLINE) return;
                $(polyLine.div).attr('stroke', polyLine.stroke);

                if(timeId) clearTimeout(timeId);
                window.timeout1 = setTimeout(function() {
                    _this.notableView.hiddenToolTips();
                }, 100);
            });
        }
    }, {
        key: 'shapesCircleEventsBind',
        value: function shapesCircleEventsBind(shapesCircle) {
            let _this = this;
            let div = shapesCircle.div;


            div.addEventListener('mousedown', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                if(window.timeout2) clearTimeout(window.timeout2);
                if(webProperties.ToolMode === 'eraserAll') {
                    _this.removeShapesCircle(shapesCircle);
                    return;
                }
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_MOVE_S_CIRCLE;
                _this.curShapesCircle = shapesCircle;
                webProperties.CurElem = shapesCircle;
            });
            div.addEventListener('mouseover', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_RESIZE_S_CIRCLE) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_MOVE_S_CIRCLE) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_DRAW_S_CIRCLE) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_ERASER_ALL) {
                    _this.removeShapesCircle(shapesCircle);
                    return;
                }
                $(shapesCircle.div).attr('stroke', webProperties.DefaultSelectedColor);
                shapesCircle.addCircles();

                window.timeout2 = setTimeout(function() {
                    _this.notableView.toolTipsHandler(shapesCircle);
                }, 500);

                _this.curShapesCircle = shapesCircle;
                webProperties.CurElem = shapesCircle;
            });
            div.addEventListener('mouseout', function(evt) {
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_RESIZE_S_CIRCLE) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_MOVE_S_CIRCLE) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_DRAW_S_CIRCLE) return;
                $(shapesCircle.div).attr('stroke', shapesCircle.stroke);
                webProperties.TimeoutID = setTimeout(()=>{
                    if(webProperties.ToolMode !== 'eraserAll') shapesCircle.removeCircles();
                }, 10);

                if(window.timeout2) clearTimeout(window.timeout2);
                window.timeout1 = setTimeout(function() {
                    _this.notableView.hiddenToolTips();
                }, 100);
            });
        }
    }, {
        key: 'shapesLineEventsBind',
        value: function shapesLineEventsBind(shapesLine) {
            let _this = this;
            let div = shapesLine.div;

            let timeId = null;
            div.addEventListener('mousedown', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                if(timeId) clearTimeout(timeId);
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_ERASER_ALL) {
                    _this.removeShapesLine(shapesLine);
                    return;
                }
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_MOVE_S_LINE;
                _this.curShapesLine = shapesLine;
                webProperties.CurElem = shapesLine;
            });
            div.addEventListener('mouseover', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_ERASER_ALL) {
                    _this.removeShapesLine(shapesLine);
                    return;
                }
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_RESIZE_S_LINE) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_MOVE_S_LINE) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_DRAW_S_LINE) return;
                $(shapesLine.div).attr('stroke', webProperties.DefaultSelectedColor);
                shapesLine.addCircles();

                timeId = setTimeout(function() {
                    _this.notableView.toolTipsHandler(shapesLine);
                }, 900);
                _this.curShapesLine = shapesLine;
                webProperties.CurElem = shapesLine;
            });
            div.addEventListener('mouseout', function(evt) {
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_RESIZE_S_LINE) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_MOVE_S_LINE) return;
                if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_DRAW_S_LINE) return;
                $(shapesLine.div).attr('stroke', shapesLine.stroke);
                webProperties.TimeoutID = setTimeout(()=>{
                    if(webProperties.EventMode !== EVENTS_MODE_ENUM.MOD_ERASER_ALL) shapesLine.removeCircles();
                }, 10);

                if(timeId) clearTimeout(timeId);
                window.timeout1 = setTimeout(function() {
                    _this.notableView.hiddenToolTips();
                }, 100);
            });
        }
    }, {
        key: 'getCurrentRect',
        value: function getCurrentRect() {
            // return this._rects[this.currentRect];
            return this.currentRect;
        }
    }, {
        key: 'getCurPolyLine',
        value: function getCurPolyLine() {
            return this.curPolyLine;
        }
    }, {
        key: 'getCurShapesCircle',
        value: function getCurShapesCircle() {
            return this.curShapesCircle;
        }
    }, {
        key:  'getCurShapesLine',
        value: function getCurShapesLine() {
            return this.curShapesLine;
        }
    }, {
        key: 'removeRect',
        value: function removeRect(rect) {
            let index = this._rects.indexOf(rect);
            if(index > -1) this._rects.splice(index, 1);
            rect.container.div.removeChild(rect.g);
        }
    }, {
        key: 'removePolyLine',
        value: function removePolyLine(polyLine) {
            // let svg = this.shapeSvg;
            let index = this.polyLines.indexOf(polyLine);
            if(index > -1) this.polyLines.splice(index, 1);
            polyLine.container.removeChild(polyLine.g);
        }
    }, {
        key: 'removeShapesCircle',
        value: function removeShapesCircle(shapesCircle) {
            // let svg = this.shapeSvg;
            let index = this.shapesCircles.indexOf(shapesCircle);
            if(index > -1) this.shapesCircles.splice(index, 1);
            shapesCircle.container.removeChild(shapesCircle.g);
        }
    }, {
        key: 'removeShapesLine',
        value: function removeShapesLine(shapesLine) {
            let index = this.shapesLines.indexOf(shapesLine);
            if(index > -1) this.shapesLines.splice(index, 1);
            shapesLine.container.removeChild(shapesLine.g);
        }
    }, {
        key: 'resizeElements',
        value: function resizeElements(oldScale, newScale) {
            let ins = (newScale / oldScale);
            // Rectangles
            $.each(this._rects, function() {
                this.dx *= ins;
                this.dy *= ins;
                this.width *= ins;
                this.height *= ins;
                this.strokeWidth *= ins;
                this.update(true);
                if(this._circles.length > 0) this.updateCircles();
            });
            $.each(this.polyLines, function() {
                let points = this.points;

                for(let i = 0; i < points.length; i++) {
                    this.points[i][0] *= ins;
                    this.points[i][1] *= ins;
                }
                this.dx *= ins;
                this.dy *= ins;
                this.strokeWidth *= ins;
                this.pointsStr = this.getPointsStr();
                this.update(true);
            });
            $.each(this.shapesCircles,function() {
                this.cx *= ins;
                this.cy *= ins;
                this.dx *= ins;
                this.dy *= ins;
                this.rx *= ins;
                this.ry *= ins;
                this.strokeWidth *= ins;
                this.update(true);
                if(this.circles.length > 0) this.updateCircles();
            });
            $.each(this.shapesLines, function() {
                this.x1 *= ins;
                this.y1 *= ins;
                this.x2 *= ins;
                this.y2 *= ins;
                this.dx *= ins;
                this.dy *= ins;
                this.strokeWidth *= ins;
                this.update(true);
                if(this.circles.length > 0) this.updateCircles();
            });
        }
    }
    ]);
    return NotableSVGLayer;
}();

exports.NotableSVGLayer = NotableSVGLayer;
// window.NotableSVGLayer = NotableSVGLayer;

}),

// 5 Rect Object

(function (module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {value: true});
exports.NotableRect = undefined;

const _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

const _circle_ = __webpack_require__(6);

const DEFAULT_FILL = "#FF009C";
const DEFAULT_OPACITY = 0.3;
const DEFAULT_STROKE = 0.1;
const DEFAULT_STROKE_WIDTH = 10;

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

let webProperties = window.webProperties;
let EVENTS_MODE_ENUM = window.webProperties.EVENTS_MODE_ENUM;

let NotableRect = function () {

    function NotableRect(options) {

        _classCallCheck(this, NotableRect);

        this.svgUrl = 'http://www.w3.org/2000/svg';

        this.containerId = options.containerId;

        this.svg = options.svg;

        this.toolItem = options.toolItem;
        this.container = options.container;
        this.fill = options.fill || DEFAULT_FILL;
        this.stroke = options.stroke || DEFAULT_STROKE;
        this.fillOpacity = options.fillOpacity || DEFAULT_OPACITY;
        this.strokeOpacity = options.strokeOpacity || DEFAULT_OPACITY;
        this.strokeWidth = options.strokeWidth || DEFAULT_STROKE_WIDTH;
        this.strokeLinejoin = 'round';
        this.x = options.x;
        this.y = options.y;
        this.dx = this.x;
        this.dy = this.y;
        this.width = options.width;
        this.height = options.height;
        this.div = null;
        this.g = null;
        this.drawFinished = false;
        this.draw();
        /***Associated Elements****/

        this._circles = [];
        this.circleUpload = false;

    }

    _createClass(NotableRect, [{
        key: 'draw',
        value: function draw() {
            //create a g div to put rect
            let g = document.createElementNS(this.svgUrl, 'g');
            $(g).addClass('shape shape-rectangle');
            $(g).attr('pointer-events', 'visiblePainted');
            this.g = g;

            let rect = document.createElementNS(this.svgUrl, 'rect');
            $(rect).addClass('shape shape-rectangle');

            rect.style.position = 'absolute';
            rect.setAttribute('fill', this.fill);
            rect.setAttribute('stroke', this.stroke);
            rect.setAttribute('fill-opacity', this.fillOpacity);
            rect.setAttribute('stroke-opacity', this.strokeOpacity);
            rect.setAttribute('stroke-linejoin', this.strokeLinejoin);
            if(webProperties.ToolMode === 'shapesRect') {
                rect.setAttribute('stroke-width', this.strokeWidth);
            }
            rect.setAttribute('x', this.x);
            rect.setAttribute('y', this.y);
            rect.setAttribute('width', this.width);
            rect.setAttribute('height', this.height);

            rect.classList.add('no-events');

            this.div = rect;
            this.g.appendChild(this.div);
            this.container.div.appendChild(this.g);
        }
    }, {
        key: 'update',
        value: function update(resize) {
            let div = this.div;

            //TODO(): here maybe have a bug, but it's not import for me
            if(this.x === 0 && this.y ===0) {
                div.setAttribute('dx', this.dx);
                div.setAttribute('dy', this.dy);
                div.setAttribute('transform', 'translate(' + this.dx + ', '+ this.dy + ')');
            } else {
                div.setAttribute('x', this.x);
                div.setAttribute('y', this.y);
            }
            if(resize) {
                div.setAttribute('stroke-width', this.strokeWidth);
            }
            if(this.width < 5) this.width = 5;
            if(this.height < 5) this.height = 5;
            div.setAttribute('width', this.width);
            div.setAttribute('height', this.height);
        }
    }, {
        key: 'resizeRect',
        value: function resizeRect(args) {
            let resizableX = args.resizableX,
                resizableY = args.resizableY,
                resizableW = args.resizableW,
                resizableH = args.resizableH,
                dxRevise = args.dxRevise,
                dyRevise = args.dyRevise;

            let currentC = args.currentC,
                previousC = args.previousC;

            let dx = currentC.x - previousC.x,
                dy = currentC.y - previousC.y;


            if(resizableW) this.width += dxRevise * dx;
            if(resizableH) this.height += dyRevise * dy;
            if(resizableX) this.dx += dx;
            if(resizableY) this.dy += dy;
            this.update();
        },
    },
        {
        key: 'getCirclesCoordinates',
        value: function getCircleCoordinates() {
            let x = this.dx,
                y = this.dy,
                width = this.width,
                height = this.height;
            let tl = {cx: x, cy: y},
                tr = {cx: tl.cx + width, cy: tl.cy},
                tm = {cx: (tl.cx + tr.cx) / 2, cy: tl.cy},
                bl = {cx: tl.cx, cy: tl.cy + height},
                br = {cx: tr.cx, cy: bl.cy},
                bm = {cx: tm.cx, cy: bl.cy},
                lm = {cx: tl.cx, cy: (tl.cy + bl.cy) / 2},
                rm = {cx: tr.cx, cy: lm.cy};
            return [tl, tr, tm, bl, br, bm, lm, rm];
        }
    },
        {
        key: 'addCircles',
        value: function addCircles() {
            if(this.circleUpload) return;
            if(this._circles.length === 8) {
                let _circles = this._circles;
                for(let c in _circles) {
                    this.g.appendChild(_circles[c].div);
                }
                this.circleUpload = true;
                return;
            }

            let circleCoordinates = this.getCirclesCoordinates();

            for(let coordinate in circleCoordinates) {
                let options = {
                    container: this.g,
                    cx: circleCoordinates[coordinate].cx,
                    cy: circleCoordinates[coordinate].cy
                };
                let circle = new _circle_.Circle(options);
                // $(circle.div).hide();
                this.g.appendChild(circle.div);
                this._circles.push(circle);
            }
            this.circlesEventsBind();
            this.circleUpload = true;
        }
    }, {
        key: 'updateCircles',
        value: function updateCircles() {
            let circleCoordinates = this.getCirclesCoordinates();
            for(let i = 0; i < circleCoordinates.length; ++i) {
                this._circles[i].div.setAttribute('cx', circleCoordinates[i].cx);
                this._circles[i].div.setAttribute('cy', circleCoordinates[i].cy);
            }
        }
    }, {
        key: 'removeCircles',
        value: function removeCircles() {
            if(!this.circleUpload) return;
            let _circles = this._circles;
            for(let c in _circles) {
                _circles[c].container.removeChild(this._circles[c].div);
            }
            this.circleUpload = false;
        }
    },  {
        key: 'circlesEventsBind',
        value: function circlesEventsBind() {
            let _this = this;
            let _circles = _this._circles;

            for(let i = 0; i < _circles.length; ++i) {
                _circles[i].div.addEventListener('mouseover', function(evt) {
                    let e = evt || window.event;
                    if(webProperties.TimeoutID) {
                        clearTimeout(webProperties.TimeoutID);
                         webProperties.TimeoutID = null;
                    }
                    _this.div.classList.add('no-events');

                });
                _circles[i].div.addEventListener('mouseout', function(evt) {
                    let e = evt || window.event;
                    if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_RESIZE_RECT) return;
                    if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_MOVE_RECT) return;
                    _this.div.classList.remove('no-events');
                    _this.removeCircles();
                });

                _circles[i].div.addEventListener('mousedown', function(evt) {
                    evt.cancelBubble = true;
                    let e = evt || window.event;
                    webProperties.PreviousC.x = e.clientX;
                    webProperties.PreviousC.y = e.clientY;
                    webProperties.EventMode = EVENTS_MODE_ENUM.MOD_RESIZE_RECT;
                    webProperties.CurResizeCircleNum = i;
                });
            }
        }
    }
    ]);
    return NotableRect;
}();

exports.NotableRect = NotableRect;

}),

// 6 Circle in Rectangle

(function (module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {value: true});
exports.Circle = undefined;

function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

const _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();


const DEFAULT_CLASS = 'point-handle';
const DEFAULT_FILL = 'blue';
const DEFAULT_STROKE = 'white';
const DEFAULT_STROKEWIDTH = '1.2';
const DEFAULT_R = '7';


let Circle = function() {

    function Circle(options) {
        _classCallCheck(this, Circle);

        this.container = options.container;
        this.id = options.id;

        this._class = options.class || DEFAULT_CLASS;
        this._fill = options.fill || DEFAULT_FILL;
        this._stroke = options.stroke || DEFAULT_STROKE;
        this._strokeWidth = options.strokeWidth || DEFAULT_STROKEWIDTH;
        this._r = options.r || DEFAULT_R;
        this._cx = options.cx;
        this._cy = options.cy;

        this.div = null;

        this.draw();

    }
    _createClass(Circle, [{
        key: 'class',
        get: function get() {
           return this._class;
        },
        set: function set(value) {
            this._class = value;
            this.div.classList.add(value);
        }
    }, {
        key: 'fill',
        get: function get() {
            return this._fill;
        },
        set: function set(value) {
            this._fill = value;
            this.div.setAttribute('fill', value);
        }
    }, {
        key: 'stroke',
        get: function get() {
            return this._stroke;
        },
        set: function set(value) {
            this._stroke = value;
            this.div.setAttribute('stroke', value);
        }
    }, {
        key: 'strokeWidth',
        get: function get() {
            return this._strokeWidth;
        },
        set: function set(value) {
            this._strokeWidth = value;
            this.div.setAttribute('stroke-width', value);
        }
    }, {
        key: 'r',
        get: function get() {
            return this._r;
        },
        set: function set(value) {
            this._r = value;
            this.div.setAttribute('r', value);
        }
    }, {
        key: 'draw',
        value: function draw() {

            let div = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            div.classList.add(this._class);
            div.setAttribute('fill', this._fill);
            div.setAttribute('stroke', this._stroke);
            div.setAttribute('stroke-width', this._strokeWidth);
            div.setAttribute('r', this._r);
            div.setAttribute('cx', this._cx);
            div.setAttribute('cy', this._cy);

            this.div = div;
        }
    }, {
        key: 'hidden',
        value: function hidden() {
            $(this.div).hide();
        }
    }, {
        key: 'show',
        value: function show() {
            $(this.div).show();
        }
    }

    ]);
    return Circle;

}();
exports.Circle = Circle;

}),

// 7 WebProperties
(function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {value: true});
exports.WebProperties = undefined;

let WebProperties = {
    EVENTS_MODE_ENUM : {
        MOD_NULL: 0,
        MOD_RESIZE_RECT: 1,
        MOD_MOVE_RECT: 20,
        MOD_DRAW_RECT: 21,
        MOD_SELECT_TEXT: 22,
        MOD_SELECT_ANNOTATION: 23,

        MOD_ERASER_ALL: 24,

        MOD_DRAW_POLYLINE: 25,
        MOD_MOVE_POLYLINE: 26,

        MOD_DRAW_S_CIRCLE: 27,
        MOD_MOVE_S_CIRCLE: 28,
        MOD_RESIZE_S_CIRCLE: 29,

        MOD_DRAW_S_LINE: 30,
        MOD_MOVE_S_LINE: 31,
        MOD_RESIZE_S_LINE: 32,

        MOD_HL_TEXT: 33,
        MOD_STRIK_TH: 34,
        MOD_UNDER_LINE: 35,

        MOD_ADD_TB: 36,
        MOD_MOVE_TB: 37,
        MOD_DELETE_TB: 38,
        MOD_RESIZE_TB: 39,

        MOD_MOVE_COM: 40,

        MOD_DRAW_IMG: 41,
        MOD_MOVE_IMG: 42,
        MOD_RESIZE_IMG: 43,
    },
    CurResizeCircleNum: null,
    ToolMode: 'selectText',
    EventMode: 0,
    //mouse info
    PreviousC: {x: 0, y: 0},
    CurrentC: {x: 0, y: 0},
    //timer
    TimeoutID: null,
    //current color
    CurrentColor: null,
    // Default selected color
    DefaultSelectedColor: 'aquamarine',

    //use for text box
    CurTextBox: null,
    CurElem: null,

    CurPageNum: null,

    // Tooltips
    isFill : null,

    getCoordinatesDis: function() {
        return {
            dx: this.CurrentC.x - this.PreviousC.x,
            dy: this.CurrentC.y - this.PreviousC.y
        };
    },
    getModifiedContents: null,
};

exports.WebProperties = WebProperties;

}),

// 8 PolyLine
(function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {value: true});
exports.NotablePolyline = undefined;

const _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

const DEFAULT_FILL = "none";
const DEFAULT_OPACITY = 1;
const DEFAULT_STROKE = '#FF009C';
const DEFAULT_STROKE_WIDTH = 10;

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

let webProperties = window.webProperties;
let EVENTS_MODE_ENUM = window.webProperties.EVENTS_MODE_ENUM;

let NotablePolyline = function () {
    function NotablePolyline(options) {
        _classCallCheck(this, NotablePolyline);

        this.containerId = options.containerId;
        this.svg = options.svg;
        this.toolItem = options.toolItem;

        this.svgUrl = 'http://www.w3.org/2000/svg';
        this.container = options.container;
        this.g = null;
        this.fill = DEFAULT_FILL;
        this.stroke = webProperties.CurrentColor || DEFAULT_STROKE;
        this.fillOpacity = options.fillOpacity || DEFAULT_OPACITY;
        this.strokeOpacity = options.strokeOpacity || DEFAULT_OPACITY;
        this.strokeWidth = options.strokeWidth || DEFAULT_STROKE_WIDTH;
        this.strokeLinejoin = 'round';
        this.strokeLinecap = 'round';
        this.fillRule = 'nonzero';
        this.dx = 0;
        this.dy = 0;
        this.pointsStr = '';
        this.points = [];

        this.div = null;
        this.drawFinished = false;
        this.draw();
    }
    _createClass(NotablePolyline, [{
        key: 'draw',
        value: function draw() {
            let polyLine = document.createElementNS(this.svgUrl, 'polyline');

            $(polyLine).addClass('shape');
            $(polyLine).attr('fill', this.fill);
            $(polyLine).attr('stroke', this.stroke);
            $(polyLine).attr('fill-opacity', this.fillOpacity);
            $(polyLine).attr('stroke-opacity', this.strokeOpacity);
            $(polyLine).attr('stroke-width', this.strokeWidth);
            $(polyLine).attr('stroke-linejoin', this.strokeLinejoin);
            $(polyLine).attr('stroke-linecap', this.strokeLinecap);
            $(polyLine).attr('fill-rule', this.fillRule);
            $(polyLine).attr('pointsStr', this.points);
            $(polyLine).addClass('no-events');
            this.div = polyLine;


            this.container.appendChild(this.div);
        }
    }, {
        key: 'update',
        value: function update(resize) {
            $(this.div).attr('points', this.pointsStr);
            if(resize) {
                $(this.div).attr('dx', this.dx);
                $(this.div).attr('dy', this.dy);
                $(this.div).attr('stroke-width', this.strokeWidth);
                $(this.div).attr('transform', 'translate(' + this.dx + ', ' + this.dy + ')');
            }
        }
    }, {
        key: 'getPointsStr',
        value: function getPointsStr() {
            let points = this.points;
            let str = '';
            for(let p in points) {
                str = str + ' ' + points[p][0] + ',' + points[p][1];
            }
            return str.substring(1, str.length);
        }
    }
    ]);

    return NotablePolyline;
}();
exports.NotablePolyline = NotablePolyline;
}),

// 9 shape circle
(function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {value: true});
exports.ShapesCircle = undefined;

const _circle_ = __webpack_require__(6);

const _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

const DEFAULT_FILL = "none";
const DEFAULT_OPACITY = 1;
const DEFAULT_STROKE = '#FF009C';
const DEFAULT_STROKE_WIDTH = 10;

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

let webProperties = window.webProperties;
let EVENTS_MODE_ENUM = window.webProperties.EVENTS_MODE_ENUM;

let ShapesCircle = function() {
    function ShapesCircle(options) {
        _classCallCheck(this, ShapesCircle);

        this.containerId = options.containerId;
        this.toolItem = options.toolItem;

        this.svg = options.svg;

        this.svgUrl = 'http://www.w3.org/2000/svg';
        this.container = options.container;
        this.g = null;
        this.fill = options.fill || DEFAULT_FILL;
        this.stroke = webProperties.CurrentColor || DEFAULT_STROKE;
        this.fillOpacity = options.fillOpacity || DEFAULT_OPACITY;
        this.strokeOpacity = options.strokeOpacity || DEFAULT_OPACITY;
        this.strokeWidth = options.strokeWidth || DEFAULT_STROKE_WIDTH;
        this.strokeLinejoin = 'round';
        this.fillRule = 'nonzero';
        this.cx = options.cx;
        this.cy = options.cy;
        this.rx = 0;
        this.ry = 0;

        this.dx = 0;
        this.dy = 0;

        this.div = null;
        this.drawFinished = false;

        this.circles = [];
        this.circlesUpload = false;

        this.draw();
    }

    _createClass(ShapesCircle, [{
        key: 'draw',
        value: function draw() {
            let ellipse = document.createElementNS(this.svgUrl, 'ellipse');

            $(ellipse).addClass('shape shape-ellipse');
            $(ellipse).attr('fill', this.fill);
            $(ellipse).attr('stroke', this.stroke);
            $(ellipse).attr('fill-opacity', this.fillOpacity);
            $(ellipse).attr('stroke-opacity', this.strokeOpacity);
            $(ellipse).attr('stroke-width', this.strokeWidth);
            $(ellipse).attr('stroke-linejoin', this.strokeLinejoin);
            $(ellipse).attr('fill-rule', this.fillRule);
            $(ellipse).attr('cx', this.cx);
            $(ellipse).attr('cy', this.cy);
            $(ellipse).attr('rx', this.rx);
            $(ellipse).attr('ry', this.ry);

            $(ellipse).addClass('no-events');
            this.div = ellipse;

            this.container.appendChild(ellipse);
        }
    }, {
        key: 'update',
        value: function update(resize) {
            $(this.div).attr('cx', this.cx);
            $(this.div).attr('cy', this.cy);
            $(this.div).attr('rx', this.rx);
            $(this.div).attr('ry', this.ry);
            if(resize || webProperties.EventMode === EVENTS_MODE_ENUM.MOD_RESIZE_S_CIRCLE) {
                $(this.div).attr('dx', this.dx);
                $(this.div).attr('dy', this.dy);
                $(this.div).attr('stroke-width', this.strokeWidth);
                $(this.div).attr('transform', 'translate(' + this.dx + ', ' + this.dy + ')');
            }
        }
    }, {
        key: 'resizeShapesCircle',
        value: function resizeShapesCircle(args) {
            let resizableX = args.resizableX,
                resizableY = args.resizableY,
                resizableDX = args.resizableDX,
                resizableDY = args.resizableDY,
                revise = args.revise;


            let currentC = args.currentC,
                previousC = args.previousC;

            let dx = currentC.x - previousC.x,
                dy = currentC.y - previousC.y;

            if(resizableX) {
                this.rx += ((dx * revise) / 2);
                this.cx = this.rx;
            }
            if(resizableY) {
                this.ry += ((dy * revise) / 2);
                this.cy = this.ry;
            }
            if(resizableDX) {
                this.dx += (dx);
            }
            if(resizableDY) {
                this.dy += (dy);
            }
            this.update();
        }
    }, {
        key: 'addCircles',
        value: function addCircles() {
            if(this.circleUpload) return;
            if(this.circles.length === 4) {
                let circles = this.circles;
                for(let c in circles) {
                    this.container.appendChild(circles[c].div);
                }
                this.circleUpload = true;
                return;
            }
            let coors = this.getCirclesCoordinates();

            for(let coor in coors) {
                let options = {
                    container: this.container,
                    cx: coors[coor].cx,
                    cy: coors[coor].cy
                };
                let circle = new _circle_.Circle(options);

                this.container.appendChild(circle.div);
                this.circles.push(circle);
            }
            this.circlesEventsBind();
            this.circleUpload = true;

        }
    }, {
        key: 'updateCircles',
        value: function updateCircles() {
            let coors = this.getCirclesCoordinates();
            for(let i = 0; i < coors.length; ++i) {
                this.circles[i].div.setAttribute('cx', coors[i].cx);
                this.circles[i].div.setAttribute('cy', coors[i].cy);
            }
        }
    }, {
        key: 'removeCircles',
        value: function removeCircles() {
            if(!this.circleUpload) return;

            let circles = this.circles;
            for(let c in circles) {
                circles[c].container.removeChild(this.circles[c].div);
            }
            this.circleUpload = false;
        }
    }, {
        key: 'getCirclesCoordinates',
        value: function getCirclesCoordinates() {
            let x = this.dx + this.rx,
                y = this.dy + this.ry,
                rx = this.rx,
                ry = this.ry;

            let top = {cx: x, cy: y - ry},
                right = {cx: x + rx, cy: y},
                bottom = {cx: x, cy: y + ry},
                left = {cx: x - rx, cy: y};

            return [top, right, bottom, left];
        }
    }, {
        key: 'circlesEventsBind',
        value: function circlesEventsBind() {
            let _this = this;
            let circles = _this.circles;

            for(let i = 0; i < circles.length; ++i) {
                circles[i].div.addEventListener('mouseover', function(evt) {
                    let e = evt || window.event;
                    if(webProperties.TimeoutID) {
                        clearTimeout(webProperties.TimeoutID);
                        webProperties.TimeoutID = null;
                    }
                    //
                    $(_this.div).attr('stroke', webProperties.DefaultSelectedColor);
                    $(_this.div).addClass('no-events');

                });
                circles[i].div.addEventListener('mouseout', function(evt) {
                    let e = evt || window.event;
                    if(webProperties.EventMode === EVENTS_MODE_ENUM.MOD_RESIZE_S_CIRCLE) return;
                    $(_this.div).attr('stroke', _this.stroke);
                    $(_this.div).removeClass('no-events');
                    _this.removeCircles();
                });

                circles[i].div.addEventListener('mousedown', function(evt) {
                    evt.cancelBubble = true;
                    let e = evt || window.event;
                    webProperties.PreviousC.x = e.clientX;
                    webProperties.PreviousC.y = e.clientY;
                    webProperties.EventMode = EVENTS_MODE_ENUM.MOD_RESIZE_S_CIRCLE;
                    webProperties.CurResizeCircleNum = i;
                });
            }
        }
    }
    ]);

    return ShapesCircle;
}();

exports.ShapesCircle = ShapesCircle;
}),

// 10 shapes line
(function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {value: true});
exports.ShapesLine = undefined;

const _circle_ = __webpack_require__(6);

const _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

const DEFAULT_FILL = "none";
const DEFAULT_OPACITY = 1;
const DEFAULT_STROKE = '#FF009C';
const DEFAULT_STROKE_WIDTH = 10;

function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }
let webProperties = window.webProperties;
let EVENTS_MODE_ENUM = window.webProperties.EVENTS_MODE_ENUM;

let ShapesLine = function () {
    function ShapesLine(options) {
        _classCallCheck(this, ShapesLine);

        this.containerId = options.containerId;

        this.svg = options.svg;

        this.svgUrl = 'http://www.w3.org/2000/svg';
        this.container = options.container;
        this.g = null;
        this.fill = DEFAULT_FILL;
        this.stroke = webProperties.CurrentColor || DEFAULT_STROKE;
        this.fillOpacity = options.fillOpacity || DEFAULT_OPACITY;
        this.strokeOpacity = options.strokeOpacity || DEFAULT_OPACITY;
        this.strokeWidth = options.strokeWidth || DEFAULT_STROKE_WIDTH;
        this.strokeLinejoin = 'round';
        this.fillRule = 'nonzero';
        this.x1 = options.x1;
        this.y1 = options.y1;
        this.x2 = options.x2;
        this.y2 = options.y2;

        this.dx = 0;
        this.dy = 0;

        this.div = null;
        this.drawFinished = false;

        this.circles = [];
        this.circlesUpload = false;

        this.draw();
    }

    _createClass(ShapesLine, [{
        key: 'draw',
        value: function draw() {
            let line = document.createElementNS(this.svgUrl, 'line');

            $(line).addClass('shape shape-line');
            $(line).attr('fill', this.fill);
            $(line).attr('stroke', this.stroke);
            $(line).attr('fill-opacity', this.fillOpacity);
            $(line).attr('stroke-opacity', this.strokeOpacity);
            $(line).attr('stroke-width', this.strokeWidth);
            $(line).attr('stroke-linejoin', this.strokeLinejoin);
            $(line).attr('fill-rule', this.fillRule);
            $(line).attr('x1', this.x1);
            $(line).attr('y1', this.y1);
            $(line).attr('x2', this.x2);
            $(line).attr('y2', this.y2);

            $(line).addClass('no-events');
            this.div = line;

            this.container.appendChild(line);
        }
    }, {
        key: 'update',
        value: function update(resize) {
            $(this.div).attr('x1', this.x1);
            $(this.div).attr('y1', this.y1);
            $(this.div).attr('x2', this.x2);
            $(this.div).attr('y2', this.y2);
            if(resize || webProperties.EventMode === EVENTS_MODE_ENUM.MOD_RESIZE_S_LINE) {
                $(this.div).attr('dx', this.dx);
                $(this.div).attr('dy', this.dy);
                $(this.div).attr('stroke-width', this.strokeWidth);
                $(this.div).attr('transform', 'translate(' + this.dx + ', ' + this.dy + ')');
            }
        }
    }, {
        key: 'resizeShapesLine',
        value: function resizeShapesLine(args) {
            let currentC = args.currentC,
                previousC = args.previousC,
                index = args.index;

            let lineDx = this.x2 - this.x1;
            let lineDy = this.y2 - this.y1;

            let dx = currentC.x - previousC.x,
                dy = currentC.y - previousC.y;


            if(lineDx >= 0 && lineDy < 0) {
                if(index === 2) {
                    this.y1 += -dy;
                    this.x2 += dx;
                    this.dy += dy;
                } else {
                    this.y1 += dy;
                    this.x2 += -dx;
                    this.dx += dx;
                }
            }
            if(lineDx > 0 && lineDy >= 0) {
                if(index === 2) {
                    this.x2 += dx;
                    this.y2 += dy;
                } else {
                    this.x2 += -dx;
                    this.y2 += -dy;
                    this.dx += dx;
                    this.dy += dy;
                }
            }
            if(lineDx <= 0 && lineDy > 0) {
                if(index === 2) {
                    this.y2 += dy;
                    this.x1 += -dx;
                    this.dx += dx;
                } else {
                    this.y2 += -dy;
                    this.x1 += dx;
                    this.dy += dy;
                }
            }
            if(lineDx < 0 && lineDy <= 0) {
                if(index === 2) {
                    this.x1 += -dx;
                    this.y1 += -dy;
                    this.dx += dx;
                    this.dy += dy;
                } else {
                    this.x1 += dx;
                    this.y1 += dy;
                }
            }
            this.update();
        }
    },
        {
        key: 'addCircles',
        value: function addCircles() {
            if (this.circleUpload) return;
            if (this.circles.length === 2) {
                let circles = this.circles;
                for (let c in circles) {
                    this.container.appendChild(circles[c].div);
                }
                this.circleUpload = true;
                return;
            }
            let coors = this.getCirclesCoordinates();
            for (let coor in coors) {
                let options = {
                    container: this.container,
                    cx: coors[coor].cx,
                    cy: coors[coor].cy
                };
                let circle = new _circle_.Circle(options);

                this.container.appendChild(circle.div);
                this.circles.push(circle);
            }
            this.circlesEventsBind();
            this.circleUpload = true;
        }
    }, {
        key: 'updateCircles',
        value: function updateCircles() {
            let coors = this.getCirclesCoordinates();
            for(let i = 0; i < coors.length; ++i) {
                this.circles[i].div.setAttribute('cx', coors[i].cx);
                this.circles[i].div.setAttribute('cy', coors[i].cy);
            }
        }
    }, {
        key: 'removeCircles',
        value: function removeCircles() {
            if(!this.circleUpload) return;
            let circles = this.circles;
            for(let c in circles) {
                circles[c].container.removeChild(this.circles[c].div);
            }
            this.circleUpload = false;
        }
    }, {
        key: 'circlesEventsBind',
        value: function circlesEventsBind() {
            let _this = this;
            let circles = _this.circles;

            for(let i = 0; i < circles.length; ++i) {
                circles[i].div.addEventListener('mouseover', function(evt) {
                    let e = evt || window.event;
                    if(webProperties.TimeoutID) {
                        clearTimeout(webProperties.TimeoutID);
                        webProperties.TimeoutID = null;
                    }
                    //
                    $(_this.div).attr('stroke', webProperties.DefaultSelectedColor);
                    $(_this.div).addClass('no-events');

                });
                circles[i].div.addEventListener('mouseout', function(evt) {
                    let e = evt || window.event;

                    $(_this.div).attr('stroke', _this.stroke);
                    $(_this.div).removeClass('no-events');
                    _this.removeCircles();
                });

                circles[i].div.addEventListener('mousedown', function(evt) {
                    evt.cancelBubble = true;
                    let e = evt || window.event;
                    webProperties.PreviousC.x = e.clientX;
                    webProperties.PreviousC.y = e.clientY;
                    webProperties.EventMode = EVENTS_MODE_ENUM.MOD_RESIZE_S_LINE;
                    webProperties.CurResizeCircleNum = i + 1;
                    // alert(i);
                });
            }
        }
    }, {
        key: 'getCirclesCoordinates',
        value: function getCirclesCoordinates() {
            let dx = this.x2 - this.x1,
                dy = this.y2 - this.y1;
            let first = {cx: this.dx + this.x1, cy: this.dy + this.y1},
                second = {cx: first.cx + dx, cy: first.cy + dy};

            return [first, second];
        }
    }
    ]);

    return ShapesLine;
}();

exports.ShapesLine = ShapesLine;
}),

// 11 highlight text div
(function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {value: true});
exports.TextHLDiv = undefined;

const _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
}();

const DEFAULT_OPACITY = '0.3';

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
let webProperties = window.webProperties;
let EVENTS_MODE_ENUM = window.webProperties.EVENTS_MODE_ENUM;

let TextHLDiv = function() {
    function TextHLDiv(options) {
        _classCallCheck(this, TextHLDiv);

        this.containerId = options.containerId;

        this.toolItem = options.toolItem;
        this.string = options.string;

        this.isLine = options.isLine || false;
        this.inComment = false;

        this.top = options.top;
        this.left = options.left;
        this.width = options.width;
        this.height = options.height;
        this.backgroundColor = options.backgroundColor || webProperties.CurrentColor;
        this.opacity = options.opacity || DEFAULT_OPACITY;

        this.marginTop = options.marginTop;

        this.container = options.container;
        this.hlWrapper = options.hlWrapper;
        this.div = null;

        this.className = options.className;

        this.draw();
    }

    _createClass(TextHLDiv, [{
        key: 'draw',
        value: function draw() {
            let div = document.createElement('div');
            $(div).css('left', this.left);
            $(div).css('top', this.top);
            $(div).css('width', this.width);
            $(div).css('height', this.height);
            $(div).css('background-color', this.backgroundColor);
            $(div).css('opacity', this.opacity);
            $(div).css('position', 'absolute');
            if(this.className){
                $(div). addClass('comment-highlighted new-highlight');
                $(div).addClass(this.className);
            }
            if(this.marginTop) {
                $(div).css('margin-top', this.marginTop);
            }
            this.div = div;
            this.hlWrapper.appendChild(div);
        }
    }, {
        key: 'update',
        value: function update() {
            $(this.div).css('left', this.left);
            $(this.div).css('top', this.top);
            $(this.div).css('width', this.width);
            $(this.div).css('height', this.height);
            if(this.marginTop) {
                $(this.div).css('margin-top', this.marginTop);
            }
        }
    }
    ]);
    return TextHLDiv;
}();

exports.TextHLDiv = TextHLDiv;
}),

// 12 text box
(function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {value: true});
exports.TextBox = undefined;

const _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

let webProperties = window.webProperties;
let EVENTS_MODE_ENUM = window.webProperties.EVENTS_MODE_ENUM;
let editors = [];

window.editor = null;

let TextBox = function() {
    function TextBox(options) {
        this.container = options.container;
        this.notableView = options.notableView;

        this.left = options.left;
        this.top = options.top;
        this.width = options.width;
        this.height = options.height;

        this.id = null;

        this.tag = 'annotation-richtext';
        this.className = 'richtextBody comment';
        this.div = null;

        this.richContainerDiv = null;
        this.rcClassName = 'richtext-container LBox-container';

        this.editDiv = null;
        this.editClassName = 'editing-area ql-container ql-snow';

        this.qlEditorDiv = null;

        this.editor = null;

        this.draw();
        this._initialize();
    }

    function quillGetHTML(inputDelta) {
        var tempCont = document.createElement("div");
        (new Quill(tempCont)).setContents(inputDelta);
        return tempCont.getElementsByClassName("ql-editor")[0].innerHTML;
    }


    _createClass(TextBox, [{
        key: 'draw',
        value: function draw() {
            let _this = this;
            this.id = editors.length + 1;

            let div = document.createElement(this.tag);
            $(div).css('left', this.left);
            $(div).css('top', this.top);
            if(this.width) $(div).css('width', this.width);
            if(this.height) $(div).css('height', this.height);
            this.div = div;
            this.container.appendChild(this.div);
            editors.push(div);

            let rcDiv = document.createElement('div');
            $(rcDiv).addClass(this.rcClassName);
            $(rcDiv).css('height', '100%');
            $(rcDiv).css('min-width', '30px');
            $(rcDiv).css('position', 'relative');
            this.richContainerDiv = rcDiv;
            this.div.appendChild(this.richContainerDiv);


            let editDiv = document.createElement('div');
            $(editDiv).addClass(this.editClassName);
            this.editDiv = editDiv;
            this.richContainerDiv.appendChild(this.editDiv);

            let qlEditorDiv = document.createElement('div');
            $(qlEditorDiv).addClass('ql-editor');
            $(qlEditorDiv).attr('id', 'ql-editor' + this.id);
            $(qlEditorDiv).attr('data-gramm', 'false');
            $(qlEditorDiv).attr('contenteditable', 'true');
            this.qlEditorDiv = qlEditorDiv;
            console.log(this.id);

            let p = document.createElement('p');
            qlEditorDiv.appendChild(p);
            this.editDiv.appendChild(this.qlEditorDiv);

            let view = this.notableView;

            if(view.curTextBox && view.curTextBox.editor) {
                let content = '';
                // console.log(window.editor);
                if(view.curTextBox.editor.getLength() > 1) {
                    let delta = view.curTextBox.editor.getContents();
                    content = quillGetHTML(delta);
                    console.log(content);
                    // let htmlC = document.getElementById('ql-editor' + view.curTextBox.id).innerHTML;
                    // console.log(htmlC);
                }
                view.curTextBox.editor = undefined;
                $(view.curTextBox.editDiv).removeClass('ql-container');
                if(content) view.curTextBox.editDiv.innerHTML = content;
            }
            let editor = new Quill(('#ql-editor'+this.id), {
                modules: {
                    formula: true,
                    syntax: true,
                    toolbar: '#LRichtextToolbarContainer'
                },
                placeholder: 'Compose an epic...',
                theme: 'snow',
            });
            editor.focus();
            this.editor = editor;

            let boxDiv = document.createElement('div');
            $(boxDiv).addClass('LBox-object LBox-boundary LBox-position-top');
            this.richContainerDiv.appendChild(boxDiv);
            boxDiv.addEventListener('mousedown', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_MOVE_TB;
                webProperties.CurTextBox = _this;
            });

            boxDiv = document.createElement('div');
            $(boxDiv).addClass('LBox-object LBox-boundary LBox-position-bottom');
            this.richContainerDiv.appendChild(boxDiv);
            boxDiv.addEventListener('mousedown', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_MOVE_TB;
                webProperties.CurTextBox = _this;

            });


            boxDiv = document.createElement('div');
            $(boxDiv).addClass('LBox-object LBox-boundary LBox-position-left');
            this.richContainerDiv.appendChild(boxDiv);
            boxDiv.addEventListener('mousedown', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_MOVE_TB;
                webProperties.CurTextBox = _this;

            });


            boxDiv = document.createElement('div');
            $(boxDiv).addClass('LBox-object LBox-boundary LBox-position-right');
            this.richContainerDiv.appendChild(boxDiv);
            boxDiv.addEventListener('mousedown', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_MOVE_TB;
                webProperties.CurTextBox = _this;

            });


            boxDiv = document.createElement('div');
            $(boxDiv).addClass('LBox-object LBox-drag-point LBox-position-top-right');
            this.richContainerDiv.appendChild(boxDiv);
            boxDiv.addEventListener('mousedown', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_RESIZE_TB;
                webProperties.CurResizeCircleNum = 0;
                webProperties.CurTextBox = _this;

            });

            boxDiv = document.createElement('div');
            $(boxDiv).addClass('LBox-object LBox-drag-point LBox-position-bottom-right');
            this.richContainerDiv.appendChild(boxDiv);
            boxDiv.addEventListener('mousedown', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_RESIZE_TB;
                webProperties.CurResizeCircleNum = 1;
                webProperties.CurTextBox = _this;

            });

            boxDiv = document.createElement('div');
            $(boxDiv).addClass('LBox-object LBox-drag-point LBox-position-bottom-left');
            this.richContainerDiv.appendChild(boxDiv);
            boxDiv.addEventListener('mousedown', function(evt) {
                evt.cancelBubble = true;
                let e = evt || window.event;
                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_RESIZE_TB;
                webProperties.CurResizeCircleNum = 2;
                webProperties.CurTextBox = _this;

            });

            boxDiv = document.createElement('div');
            $(boxDiv).addClass('LBox-object LBox-delete-point icomoon-XX LBox-position-top-left');
            this.richContainerDiv.appendChild(boxDiv);
            boxDiv.addEventListener('click', function() {
                _this.remove();
            });

            return this;
        }
    }, {
        key: 'remove',
        value: function remove() {
            this.container.removeChild(this.div);
        }
    }, {
        key: 'resizeBox',
        value: function resizeBox(resizeMode) {
            let dx = webProperties.getCoordinatesDis().dx,
                dy = webProperties.getCoordinatesDis().dy;
            if(this.width < 20) return;
            if(this.height < 20) return;
            switch(resizeMode) {
                case 0: {
                    this.top += dy;
                    this.height += -dy;
                    this.width += dx;
                    break;
                }
                case 1: {
                    this.height += dy;
                    this.width += dx;
                    break;
                }
                case 2: {
                    this.left += dx;
                    this.width += -dx;
                    this.height += dy;
                    break;
                }
            }
            this.update();
        }
    }, {
        key: '_initialize',
        value: function initialize() {
            this.width = $(this.div).width();
            this.height = $(this.div).height();
        }
    }, {
        key: 'update',
        value: function update() {
            if(this.width < 30) this.width = 30;
            if(this.height < 30) this.height = 30;
            $(this.div).css('width', this.width);
            $(this.div).css('height', this.height);
            $(this.div).css('left', this.left);
            $(this.div).css('top', this.top);
        }
    }
    ]);
    return TextBox;
}();

exports.TextBox = TextBox;
}),

// 13 comment
(function (module, exports, __webpack_require__) {
Object.defineProperty(exports, "__esModule", {value: true});
exports.Comment = undefined;

const _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

let webProperties = window.webProperties;
let EVENTS_MODE_ENUM = window.webProperties.EVENTS_MODE_ENUM;

let Comment = function() {
    function Comment(options) {

        this.containerId = options.containerId;

        this.container = options.container;
        this.comContainer = options.comContainer;

        this.isMark = options.isMark || false;
        this.hlDivs = options.hlDivs;
        this.markColor = options.markColor;

        this.bgColor = options.bgColor || webProperties.CurrentColor;

        this.top = options.top;
        this.left = options.left;
        this.width = options.width;
        this.height = options.height;

        this.pointerWrapper = null;
        this.pointer = null;
        this.colorSelector = null;
        this.commentBody = null;
        this.comment = null;
        this.comContent = null;

        this.cells = [];

        if(this.isMark) this.drawActualComment(this.top);
        else this.draw();
    }

    _createClass(Comment, [{
        key: 'draw',
        value: function draw(needPointer) {
            // Draw a point
            let div = document.createElement('div');
            $(div).addClass('pointer-wrapper');
            $(div).css('top', this.top);
            $(div).css('left', this.left);

            this.container.appendChild(div);
            this.pointerWrapper = div;

            let pointDiv = document.createElement('div');
            $(pointDiv).addClass('pointer');
            $(pointDiv).css('background-color', this.bgColor);
            $(pointDiv).css('opacity', 0.8);
            $(pointDiv).css('visibility', 'visible');
            div.appendChild(pointDiv);
            this.pointer = pointDiv;

            let bridge = document.createElement('div');
            $(bridge).addClass('color-picker-bridge');
            div.appendChild(bridge);

            let colorPicker = this.createColorPicker();
            // Create color picker
            div.appendChild(colorPicker);

            let top = $(this.pointer).offset().top;
            // Draw comment

            this.drawActualComment(top);

        }
    }, {
        key: 'update',
        value: function update() {
            $(this.pointerWrapper).css('top', this.top);
            $(this.pointerWrapper).css('left', this.left);
            $(this.pointer).css('width', this.width);
            $(this.pointer).css('height', this.height);
        }
    }, {
        key: 'createColorPicker',
        value: function createColorPicker() {
            let picker = document.createElement('div');
            $(picker).addClass('color-picker');
            // pointDiv.appendChild(picker);

            let subDiv = document.createElement('div');
            $(subDiv).addClass('highlight-color-selector');
            picker.appendChild(subDiv);
            this.colorSelector = subDiv;

            let colorTable = document.createElement('div');
            $(colorTable).addClass('color-table');
            subDiv.appendChild(colorTable);

            let colorRow = this.createColorRow('rgb(241, 255, 0)', 'rgb(0, 255, 54)', 'rgb(255, 0, 156)');
            colorTable.appendChild(colorRow);
            colorRow = this.createColorRow('rgb(255, 0, 0)', 'rgb(0, 240 ,255)', 'rgb(216, 0, 255)');
            colorTable.appendChild(colorRow);
            colorRow = this.createColorRow('rgb(255, 200, 0)', 'rgb(255, 255, 255)', 'rgb(0, 0, 0)');
            colorTable.appendChild(colorRow);
            return picker;
        }
    }, {
        key: 'createColorRow',
        value: function createColorRow(rgb1, rgb2, rgb3) {
            let colorRow = document.createElement('div');
            $(colorRow).addClass('color-row');
            // colorTable.appendChild(colorRow);

            let colorCell = document.createElement('div');
            $(colorCell).addClass('color-cell');
            colorRow.appendChild(colorCell);
            let cell = document.createElement('div');
            $(cell).css('background-color', rgb1);
            colorCell.appendChild(cell);
            this.cells.push(cell);

            colorCell = document.createElement('div');
            $(colorCell).addClass('color-cell');
            colorRow.appendChild(colorCell);
            cell = document.createElement('div');
            $(cell).css('background-color', rgb2);
            colorCell.appendChild(cell);
            this.cells.push(cell);

            colorCell = document.createElement('div');
            $(colorCell).addClass('color-cell');
            colorRow.appendChild(colorCell);
            cell = document.createElement('div');
            $(cell).css('background-color', rgb3);
            colorCell.appendChild(cell);
            this.cells.push(cell);

            return colorRow;
        }
    }, {
        key: 'movePointer',
        value: function movePointer() {
            $(this.pointerWrapper).addClass('dragging');
            $(this.pointerWrapper).css('top', this.top);
            $(this.pointerWrapper).css('left', this.left);

        }
    }, {
        key: 'moveComment',
        value: function moveComment() {
            $(this.pointerWrapper).removeClass('dragging');
            $(this.commentBody).css('top', this.top);
            if($(this.comment).text() === '') this.comment.focus();
        }
    },
        {
        key: 'drawActualComment',
        value: function drawActualComment(top) {
            // console.log(top);
            // Update layer
            let commentBody = document.createElement('div');
            $(commentBody).addClass('commentBody');
            $(commentBody).addClass('aligned');
            $(commentBody).css('top', top);
            $(commentBody).css('left', '0');
            $(commentBody).css('visibility', 'visible');
            $(this.comContainer).append(commentBody);
            this.commentBody = commentBody;

            let actualCom = document.createElement('div');
            $(actualCom).addClass('actual-comment');
            $(commentBody).append(actualCom);
            // Author  (for destroy)
            let author = document.createElement('div');
            $(author).addClass('author');
            actualCom.appendChild(author);
            let div1 = document.createElement('div');
            $(div1).addClass('avatar');
            author.appendChild(div1);
            div1 = document.createElement('div');
            $(div1).addClass('dual-lines');
            author.appendChild(div1);
            div1 = document.createElement('div');
            $(div1).addClass('fa fa-times destroy');
            author.appendChild(div1);

            // Actual comments
            let div = document.createElement('div');
            $(actualCom).append(div);
            let newComWrapper = document.createElement('div');
            $(newComWrapper).addClass('new-comment-wrapper');
            div.appendChild(newComWrapper);
            div1 = document.createElement('div');
            $(div1).css('position', 'relative');
            $(newComWrapper).append(div1);
            let comment = document.createElement('div');
            $(comment).addClass('comment textarea-lookalike');
            $(comment).attr('contenteditable', 'true');
            $(div1).append(comment);
            this.comment = comment;
            this.comment.focus();

        }
    }, {
        key: '_remove',
        value: function remove() {
            // this.container.removeChild(this.pointerWrapper);
            if(this.pointerWrapper) $(this.pointerWrapper).remove();
            $(this.commentBody).remove();
            // this.comContainer.removeChild(this.commentBody);
        }
    }
    ]);

    return Comment;
}();

exports.Comment = Comment;
}),

// 14 image

(function (module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {value: true});
exports.Image = undefined;

const _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

let webProperties = window.webProperties;
let EVENTS_MODE_ENUM = window.webProperties.EVENTS_MODE_ENUM;

const MIN_IMG_WIDTH = 50;
const MIN_IMG_HEIGHT = 50;

let Image = function() {
    function Image(options) {
        _classCallCheck(this, Image);
        this.containerId = options.containerId;
        this.type = options.type;
        this.name = options.name;


        this.notableView = options.notableView;

        this.preContainer = options.preContainer;
        this.container = options.container;

        this.preDiv = null;
        this.div = null;

        this.top = options.top;
        this.left = options.left;

        this.imgUrl = options.imgUrl;
        this.imgWidth = options.imgWidth;
        this.imgHeight = options.imgHeight;

        this.opacity = options.opacity || 1;

        this.drawFinished = false;

        this.preDraw();
    }

    _createClass(Image, [{
        key: 'preDraw',
        value: function preDraw() {
            let div = document.createElement('div');
            $(div).addClass('autograph-ghost');
            $(div).css('left', this.left);
            $(div).css('top', this.top);
            $(this.preContainer).append(div);
            this.preDiv = div;
            let p = document.createElement('p');
            $(p).addClass('helper-message');
            $(p).text('Click To Drop');
            $(div).append(p);
            let img = document.createElement('img');
            $(img).attr('src', this.imgUrl);
            if(this.imgWidth) $(img).attr('width', this.imgWidth);
            if(this.imgHeight) $(img).attr('height', this.imgHeight);

            $(div).append(img);
        }
    }, {
        key: 'finishDraw',
        value: function finishDraw() {
            let _this = this;

            let timeId = null;
            // let page = document.querySelector('#page' + webProperties.CurPageNum);

            let autograghBody = document.createElement('annotation-autograph');
            $(autograghBody).addClass('autographBody hover-resize');

            $(autograghBody).css('width', this.imgWidth);
            $(autograghBody).css('height', this.imgHeight);
            $(autograghBody).css('top', this.top);
            $(autograghBody).css('left', this.left);
            $(autograghBody).css('z-index', '1');
            $(this.container).append(autograghBody);
            this.div = autograghBody;

            let img = document.createElement('img');
            $(img).addClass('autograph');
            $(img).attr('src', this.imgUrl);
            $(autograghBody).append(img);

            let handleRight = document.createElement('div');
            $(handleRight).addClass('handle-right');
            $(autograghBody).append(handleRight);

            // Events bind
            $(autograghBody).on('mouseenter', function() {
                $(this).addClass('hover');
                timeId = setTimeout(function() {
                    _this.notableView.toolTipsHandler(_this);
                }, 600);
                webProperties.CurElem = _this;
            });
            $(autograghBody).on('mouseleave', function() {
                $(this).removeClass('hover');
                if(timeId) clearTimeout(timeId);
                window.timeout1 = setTimeout(function() {
                    _this.notableView.hiddenToolTips();
                }, 100);
            });
            $(autograghBody).on('mousedown', function() {
                if(timeId) clearTimeout(timeId);
            });
            $(img).on('mousedown', function(evt) {
                evt.preventDefault();
                let e = evt || window.event;

                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_MOVE_IMG;
                _this.notableView.curImage = _this;
            });
            $(handleRight).on('mousedown', function(evt) {
                let e = evt || window.event;

                webProperties.PreviousC.x = e.clientX;
                webProperties.PreviousC.y = e.clientY;
                webProperties.EventMode = EVENTS_MODE_ENUM.MOD_RESIZE_IMG;
                _this.notableView.curImage = _this;
            });
        }
    }, {
        key: 'moveImage',
        value: function moveImage() {
            if(!this.drawFinished) {
                $(this.preDiv).css('top', this.top);
                $(this.preDiv).css('left', this.left);
                return;
            }
            $(this.div).css('top', this.top);
            $(this.div).css('left', this.left);

        }
    }, {
        key: 'resizeImage',
        value: function resizeImage(w, h) {

            if(w < MIN_IMG_WIDTH)  {
                this.imgWidth = MIN_IMG_WIDTH;
                // return;
                // this.imgHeight = MIN_IMG_HEIGHT;
            } else if(h < MIN_IMG_HEIGHT) {
                this.imgHeight = MIN_IMG_HEIGHT;
            } else {
                this.imgWidth = w;
                this.imgHeight = h;
            }

            $(this.div).css('width', this.imgWidth);
            $(this.div).css('height', this.imgHeight);
        }
    }, {
        key: 'update',
        value: function update() {
            $(this.div).css('left', this.left);
            $(this.div).css('top', this.top);

            $(this.div).css('width', this.imgWidth);
            $(this.div).css('height', this.imgHeight);
        }
    }, {
        key: 'removePre',
        value: function removePre() {
            $(this.preDiv).remove();
            // let index = this.notableView.images.indexOf(this);
            // this.notableView.images.splice(index, 1);
        }
    }
    ]);

    return Image;
}();

exports.Image = Image;
}),
];

window.onload = function () {
    function MAIN(modules) {
        let installedModules = {};

        window.appPromise = new Promise(function(resolve, reject) {
            window.webProperties = __webpack_require__(7).WebProperties;
            // window._notable_view_ = __webpack_require__(2);
            window._notable_svg_layer_ = __webpack_require__(4);
            resolve();
        });


        function __webpack_require__(moduleID) {

            if (installedModules[moduleID]) {
                return installedModules[moduleID].exports;
            }
            let module = installedModules[moduleID] = {
                i: moduleID,
                l: false,
                exports: {}
            };

            modules[moduleID].call(module.exports, module, module.exports, __webpack_require__);

            module.l = true;

            return module.exports;
        }

        __webpack_require__.m = modules;

        __webpack_require__.c = installedModules;

        __webpack_require__.d = function (exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {enumerable: true, get: getter});
            }
        };

        __webpack_require__.r = function (exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            }
            Object.defineProperty(exports, '__esModule', {value: true});
        };

        __webpack_require__.t = function (value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, 'default', {enumerable: true, value: value});
            if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
                return value[key];
            }.bind(null, key));
            return ns;
        };

        __webpack_require__.n = function (module) {
            let getter = module && module.__esModule ?
                function getDefault() {
                    return module['default'];
                } :
                function getModuleExports() {
                    return module;
                };
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        };

        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };

        __webpack_require__.p = "";

        //Load entry module
        return __webpack_require__(__webpack_require__.s = 0);

    }
    MAIN(NotableModules);

};
/*----------------------------------------------------------------------*/

