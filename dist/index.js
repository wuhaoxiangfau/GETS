var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define("util/uuid", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Uuid {
        static getUuid() {
            return this.id++;
        }
    }
    Uuid.id = 0;
    exports.Uuid = Uuid;
});
define("core/cntroller/interface/GEObjectInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/cntroller/implements/GEObject", ["require", "exports", "util/uuid"], function (require, exports, uuid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GEObject {
        constructor() {
            this.id = uuid_1.Uuid.getUuid();
            this.constructorFunction = this.constructor;
        }
    }
    exports.default = GEObject;
});
define("util/ArraySet", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ArraySet {
        constructor() {
            this.array = new Array();
        }
        add(value) {
            let index = this.array.indexOf(value);
            if (index === -1) {
                this.array.push(value);
            }
            return index;
        }
        ;
        get(index) {
            return this.array[index];
        }
        ;
        concat(arraySet) {
            arraySet.map(item => {
                this.add(item);
            });
        }
        ;
        map(fun) {
            const array = [...this.array];
            return array.map((item, index) => {
                return fun(item, index);
            });
        }
        ;
        remove(value) {
            const index = this.array.indexOf(value);
            if (-1 !== index) {
                this.array.splice(index, 1);
            }
        }
        ;
        valus() {
            return this.array;
        }
    }
    exports.default = ArraySet;
});
define("util/map/Map", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Map {
        constructor(key, value) {
            this.keyArray = new Array();
            this.valueArry = new Array();
            if (key) {
                this.set(key, value);
            }
        }
        get(key) {
            const keyIndex = this.keyArray.indexOf(key);
            return this.valueArry[keyIndex];
        }
        set(key, value) {
            const keyIndex = this.keyArray.indexOf(key);
            if (keyIndex > -1) {
                this.valueArry[keyIndex] = value;
            }
            else {
                this.keyArray.push(key);
                this.valueArry.push(value);
            }
        }
        delete(key) {
            const keyIndex = this.keyArray.indexOf(key);
            this.keyArray.splice(keyIndex, 1);
            this.valueArry.splice(keyIndex, 1);
            return false;
        }
        keys() {
            return [...this.keyArray];
        }
        values() {
            return [...this.valueArry];
        }
    }
    exports.default = Map;
});
define("util/map/MutiValueMap", ["require", "exports", "util/ArraySet", "util/map/Map"], function (require, exports, ArraySet_1, Map_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MutiValueMap {
        constructor() {
            this.map = new Map_1.default();
        }
        add(key, value) {
            const arraySet = this.get(key);
            arraySet.add(value);
        }
        ;
        get(key) {
            let resultArray = this.map.get(key);
            if (!resultArray) {
                resultArray = new ArraySet_1.default();
                this.map.set(key, resultArray);
            }
            return resultArray;
        }
        ;
        keys() {
            return this.map.keys();
        }
        values() {
            return this.map.values().reduce((resulrtArray, itemArry) => resulrtArray.concat(itemArry), []);
        }
        removeValues(key) {
            this.map.delete(key);
        }
        ;
        removeValue(key, value) {
            const resultArray = this.map.get(key);
            if (resultArray) {
                resultArray.remove(value);
            }
        }
        ;
    }
    exports.default = MutiValueMap;
});
define("core/components/interface/AbstarctComponentInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/gameObject/interface/GameObjectInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("util/data/Vector2D", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Vector2D {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        get X() {
            return this.x;
        }
        get Y() {
            return this.y;
        }
    }
    exports.default = Vector2D;
});
define("core/gameObject/interface/CameraInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/gameObject/implement/GameObject", ["require", "exports", "core/cntroller/implements/GEObject", "core/cntroller/GE", "util/map/MutiValueMap"], function (require, exports, GEObject_1, GE_1, MutiValueMap_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GameObject extends GEObject_1.default {
        constructor() {
            super(...arguments);
            this.componentMap = new MutiValueMap_1.default();
        }
        addComponent(component) {
            component.gameObject = this;
            component.Services = GE_1.default.getServiceMap();
            this.componentMap.add(component.constructorFunction, component);
            GE_1.default.addComponent(this, component);
            return component;
        }
        ;
        removeComponent(component) {
            component.gameObject = null;
            GE_1.default.removeComponent(this, component);
            this.componentMap.removeValue(component.constructorFunction, component);
        }
        ;
        getComponents(componentType) {
            return this.componentMap.get(componentType);
        }
        ;
        getComponent(componentType) {
            return this.componentMap.get(componentType).get(0);
        }
        ;
        getMainCamera() {
            return GE_1.default.getMainCamera();
        }
        setCamera(camera) {
            GE_1.default.setMainCamera(camera);
        }
        getAllComponents() {
            return this.componentMap.values();
        }
    }
    exports.default = GameObject;
});
define("core/services/interface/AbstractServiceInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/services/implement/AbstractService", ["require", "exports", "core/cntroller/implements/GEObject", "core/cntroller/GE"], function (require, exports, GEObject_2, GE_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AbstractService extends GEObject_2.default {
        getMainCamera() {
            return GE_2.default.getMainCamera();
        }
    }
    exports.default = AbstractService;
});
define("core/services/interface/TimerInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/services/implement/Timer", ["require", "exports", "core/services/implement/AbstractService"], function (require, exports, AbstractService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Timer extends AbstractService_1.default {
        constructor() {
            super();
            this.dealTime = 0;
            this.startFromeNow = 0;
            this.startTime = 0;
            this.sacle = 1 * 0.001;
        }
        get DealTime() {
            return this.dealTime;
        }
        ;
        get StartFromeNow() {
            return this.startFromeNow;
        }
        ;
        get Scale() {
            return this.sacle * 1000;
        }
        set Scale(scale) {
            if (scale > 1) {
                this.sacle = 0.001;
            }
            else if (scale < 0) {
                this.sacle = 0;
            }
            else {
                this.sacle = scale * 0.001;
            }
        }
        init() {
            this.startTime = Date.now();
        }
        ;
        willUpdate() {
            const newStartFromeNow = (Date.now() - this.startTime) * this.sacle;
            this.dealTime = (newStartFromeNow - this.startFromeNow);
            this.startFromeNow = newStartFromeNow;
        }
        ;
    }
    exports.default = Timer;
});
define("core/services/interface/InputServiceInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeyBoard;
    (function (KeyBoard) {
        KeyBoard["A"] = "A";
        KeyBoard["B"] = "B";
        KeyBoard["C"] = "C";
        KeyBoard["D"] = "D";
        KeyBoard["F"] = "F";
        KeyBoard["Q"] = "Q";
        KeyBoard["W"] = "W";
        KeyBoard["E"] = "E";
        KeyBoard["R"] = "R";
        KeyBoard["T"] = "T";
        KeyBoard["Y"] = "Y";
        KeyBoard["U"] = "U";
        KeyBoard["I"] = "I";
        KeyBoard["O"] = "O";
        KeyBoard["P"] = "P";
        KeyBoard["S"] = "S";
        KeyBoard["G"] = "G";
        KeyBoard["H"] = "G";
        KeyBoard["J"] = "J";
        KeyBoard["K"] = "K";
        KeyBoard["L"] = "L";
        KeyBoard["Z"] = "Z";
        KeyBoard["X"] = "X";
        KeyBoard["V"] = "V";
        KeyBoard["N"] = "N";
        KeyBoard["M"] = "M";
        KeyBoard["q"] = "q";
        KeyBoard["w"] = "w";
        KeyBoard["e"] = "e";
        KeyBoard["r"] = "r";
        KeyBoard["t"] = "t";
        KeyBoard["y"] = "y";
        KeyBoard["u"] = "u";
        KeyBoard["i"] = "i";
        KeyBoard["o"] = "o";
        KeyBoard["p"] = "p";
        KeyBoard["a"] = "a";
        KeyBoard["s"] = "s";
        KeyBoard["d"] = "d";
        KeyBoard["f"] = "f";
        KeyBoard["g"] = "g";
        KeyBoard["h"] = "h";
        KeyBoard["j"] = "j";
        KeyBoard["k"] = "k";
        KeyBoard["l"] = "l";
        KeyBoard["z"] = "z";
        KeyBoard["x"] = "x";
        KeyBoard["c"] = "c";
        KeyBoard["v"] = "v";
        KeyBoard["b"] = "b";
        KeyBoard["n"] = "n";
        KeyBoard["m"] = "m";
        KeyBoard["SHIFT"] = "Shift";
        KeyBoard["LEFT"] = "ArrowLeft";
        KeyBoard["RIGHT"] = "ArrowRight";
        KeyBoard["UP"] = "ArrowUp";
        KeyBoard["DOWN"] = "ArrowDown";
    })(KeyBoard = exports.KeyBoard || (exports.KeyBoard = {}));
});
define("core/services/implement/InputService", ["require", "exports", "core/services/implement/AbstractService"], function (require, exports, AbstractService_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InputService extends AbstractService_2.default {
        constructor() {
            super();
            this.isKeysDown = {};
            this.hasKeysDown = {};
            this.hasKeysUp = {};
            window.addEventListener('keydown', event => {
                this.isKeysDown[event.key] = true;
                this.hasKeysDown[event.key] = true;
                this.hasKeysUp[event.key] = false;
            });
            window.addEventListener('keyup', event => {
                this.isKeysDown[event.key] = false;
                this.hasKeysDown[event.key] = false;
                this.hasKeysUp[event.key] = true;
            });
        }
        ;
        updated() {
            const downKeys = Object.keys(this.hasKeysDown);
            for (let i = 0; i < downKeys.length; i++) {
                this.hasKeysDown[downKeys[i]] = false;
            }
            const upKeys = Object.keys(this.hasKeysUp);
            for (let i = 0; i < upKeys.length; i++) {
                this.hasKeysUp[upKeys[i]] = false;
            }
        }
        keyDown(keyBoard) {
            return this.hasKeysDown[keyBoard];
        }
        keyUp(keyBoard) {
            return this.hasKeysUp[keyBoard];
        }
        isKeyDown(keyBoard) {
            return this.isKeysDown[keyBoard];
        }
        ;
        isKeyUp(keyBoard) {
            return !this.isKeysDown[keyBoard];
        }
        ;
        onKeyDown(keyBoard, fun) {
            fun();
        }
        ;
        onKeyUp(keyBoard, fun) {
            fun();
        }
        ;
    }
    exports.default = InputService;
});
define("core/services/interface/Render2DServiceInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/components/interface/Position2DComponentsInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/components/implements/Position2DComponents", ["require", "exports", "core/components/implements/AbstarctComponent"], function (require, exports, AbstarctComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Position2DComponents extends AbstarctComponent_1.default {
        constructor() {
            super();
            this.x = 0;
            this.y = 0;
            this.rotation = 0;
            this.oldX = 0;
            this.oldY = 0;
            this.oldRotation = 0;
            this.isDirty = false;
        }
        get X() {
            return this.x;
        }
        get Y() {
            return this.y;
        }
        get IsDirty() {
            return this.isDirty;
        }
        set X(x) {
            if (x !== this.x) {
                this.oldX = this.x;
                this.x = x;
                this.isDirty = true;
            }
        }
        set Y(y) {
            if (y !== this.y) {
                this.oldY = this.y;
                this.y = y;
                this.isDirty = true;
            }
        }
        set Rotation(rotation) {
            if (rotation !== this.rotation) {
                this.oldRotation = this.rotation;
                this.rotation = rotation;
                this.isDirty = true;
            }
        }
        get OldX() {
            return this.oldX;
        }
        get OldY() {
            return this.oldY;
        }
        get Rotation() {
            return this.rotation;
        }
        get OldRotation() {
            return this.oldRotation;
        }
        afterUpdated() {
            this.isDirty = false;
        }
    }
    exports.default = Position2DComponents;
});
define("core/gameObject/implement/Camera2D", ["require", "exports", "core/gameObject/implement/GameObject", "util/data/Vector2D", "core/components/implements/Position2DComponents"], function (require, exports, GameObject_1, Vector2D_1, Position2DComponents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Camera2D extends GameObject_1.default {
        constructor() {
            super();
            this.position2DComponents = this.addComponent(new Position2DComponents_1.default());
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        }
        get Width() {
            return this.width;
        }
        get Height() {
            return this.height;
        }
        getPosition() {
            return new Vector2D_1.default(this.position2DComponents.X, this.position2DComponents.Y);
        }
    }
    exports.default = Camera2D;
});
define("core/services/implement/Render2DService", ["require", "exports", "core/services/implement/AbstractService"], function (require, exports, AbstractService_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Render2DService extends AbstractService_3.default {
        constructor() {
            super();
            this.isDirty = true;
        }
        init() {
            this.mainCamera = this.getMainCamera();
            this.initCanvas();
        }
        ;
        initCanvas() {
            document.body.style.margin = '0 0';
            const mainCanvas = this.getCanvas();
            if (!this.maiCanvas) {
                this.maiCanvas = mainCanvas.canavs;
                this.mainContext = mainCanvas.context;
                this.maiCanvas.style.background = 'black';
                document.body.appendChild(this.maiCanvas);
                const tempCanvas = this.getCanvas();
                this.tempContext = tempCanvas.context;
                this.tempCanvas = tempCanvas.canavs;
            }
        }
        ;
        getCanvas() {
            const canavs = document.createElement('canvas');
            canavs.width = this.mainCamera.Width;
            canavs.height = this.mainCamera.Height;
            return {
                canavs,
                context: canavs.getContext('2d'),
            };
        }
        render(canvas, x, y) {
            const cameraPosition = this.mainCamera.getPosition();
            this.tempContext.drawImage(canvas, x - cameraPosition.X, y - cameraPosition.Y, canvas.width, canvas.height);
            this.isDirty = true;
        }
        ;
        update() {
            if (this.isDirty) {
                this.mainContext.clearRect(0, 0, this.maiCanvas.width, this.maiCanvas.height);
                this.mainContext.drawImage(this.tempCanvas, 0, 0, this.tempCanvas.width, this.tempCanvas.height);
                this.tempContext.clearRect(0, 0, this.tempCanvas.width, this.tempCanvas.height);
                this.isDirty = false;
            }
        }
        ;
    }
    exports.default = Render2DService;
});
define("core/services/interface/ResourceLoader", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResourceType;
    (function (ResourceType) {
        ResourceType[ResourceType["AUDIO"] = 1] = "AUDIO";
        ResourceType[ResourceType["IMAGE"] = 2] = "IMAGE";
        ResourceType[ResourceType["VIDEO"] = 3] = "VIDEO";
    })(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
    class Resource {
        constructor(url, type) {
            this.url = url;
            this.type = type;
        }
        get Url() {
            return this.url;
        }
        get Type() {
            return this.type;
        }
        get Content() {
            return this.content;
        }
        set Content(content) {
            this.content = content;
        }
    }
    exports.Resource = Resource;
});
define("core/services/implement/ResourceLoader", ["require", "exports", "core/services/implement/AbstractService", "core/services/interface/ResourceLoader", "util/map/Map"], function (require, exports, AbstractService_4, ResourceLoader_1, Map_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ResourceLoader extends AbstractService_4.default {
        constructor() {
            super();
            this.loadingNumber = 0;
            this.loadedNumber = 0;
            this.allCompleteTasks = new Array();
            this.loadedSourceMap = new Map_2.default();
            this.initMethodMap();
        }
        get LoadedNumber() {
            return this.loadedNumber;
        }
        get LoaingNumber() {
            return this.loadingNumber;
        }
        getFullUrl(url) {
            const templink = document.createElement('link');
            templink.href = 'url';
            return templink.href;
        }
        initMethodMap() {
            this.methodMap = new Map_2.default();
            this.methodMap.set(ResourceLoader_1.ResourceType.IMAGE, this.loadImage);
        }
        ;
        loadResource(resource) {
            return __awaiter(this, void 0, void 0, function* () {
                const loadedSource = this.loadedSourceMap.get(this.getFullUrl(resource.Url));
                if (loadedSource) {
                    resource.Content = loadedSource.Content;
                    return;
                }
                this.loadingNumber++;
                yield this.methodMap.get(resource.Type)(resource);
                this.loadedNumber++;
                this.loadedSourceMap.set(this.getFullUrl(resource.Url), resource);
                if (this.loadingNumber === this.loadedNumber) {
                    this.flushCompleteTasks();
                }
            });
        }
        ;
        loadImage(resource) {
            const image = new Image();
            const permise = new Promise((resolve, reject) => {
                image.addEventListener('load', () => {
                    resource.Content = image;
                    resolve();
                });
                image.addEventListener('error', event => {
                    console.error(event);
                    reject();
                });
            });
            image.src = resource.Url;
            return permise;
        }
        ;
        onLoaded(fun) {
            if (this.loadedNumber === this.loadingNumber) {
                fun();
            }
            else {
                this.allCompleteTasks.push(fun);
            }
        }
        ;
        isloading() {
            return this.loadedNumber === this.loadedNumber;
        }
        flushCompleteTasks() {
            for (let i = 0; i < this.allCompleteTasks.length; i++) {
                this.allCompleteTasks[i]();
            }
            this.allCompleteTasks = [];
        }
        ;
    }
    exports.ResourceLoader = ResourceLoader;
});
define("core/components/interface/Render2DComponentInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/components/implements/Render2DComponent", ["require", "exports", "core/components/implements/AbstarctComponent", "config/RuntimeConfig", "core/components/implements/Position2DComponents"], function (require, exports, AbstarctComponent_2, RuntimeConfig_1, Position2DComponents_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RectCanvas {
        constructor(width, height, color) {
            this.canvas = document.createElement('canvas');
            this.canvas.width = width;
            this.canvas.height = height;
            this.fillColor(this.canvas, color);
        }
        fillColor(canvas, color) {
            const context = canvas.getContext('2d');
            context.fillStyle = color;
            context.fillRect(0, 0, canvas.width, canvas.height);
        }
        get Canvas() {
            return this.canvas;
        }
    }
    exports.RectCanvas = RectCanvas;
    class Render2DComponent extends AbstarctComponent_2.default {
        constructor(image) {
            super();
            this.isDirty = true;
            this.canvas = document.createElement('canvas');
            this.imageResource = image;
        }
        get ImageResource() {
            return this.imageResource;
        }
        set ImageResource(imageResource) {
            this.imageResource = imageResource;
            this.isDirty = true;
        }
        awake() {
            this.renderService = this.getService(RuntimeConfig_1.ServiceNameSpaces.Render2DService);
            this.positionComp = this.getComponent(Position2DComponents_2.default);
            const context = this.canvas.getContext('2d');
            context.drawImage(this.imageResource, 0, 0);
        }
        start() {
            this.renderService.render(this.canvas, this.positionComp.X, this.positionComp.Y);
        }
        ;
        render() {
            if (this.positionComp.IsDirty || this.isDirty) {
                this.renderService.render(this.canvas, this.positionComp.X, this.positionComp.Y);
                this.isDirty = false;
            }
        }
        ;
        destroy() {
            console.log('destroy...');
        }
        destroyed() {
            console.log('destroyed...');
        }
    }
    exports.default = Render2DComponent;
});
define("core/components/interface/Collision2DComponentInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/services/interface/CollisionServiceInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ImpactInstanceInfo {
        constructor(gameObjectId, position) {
            this.gameObjectId = gameObjectId;
            this.position = position;
        }
        get GameObjectId() {
            return this.gameObjectId;
        }
        ;
        get Position() {
            return this.position;
        }
        ;
    }
    exports.ImpactInstanceInfo = ImpactInstanceInfo;
    class MotionInfo {
        constructor(position, oldPosition) {
            this.position = position;
            this.oldPosition = oldPosition;
        }
        get Position() {
            return this.position;
        }
        get OldPosition() {
            return this.oldPosition;
        }
    }
    exports.MotionInfo = MotionInfo;
    class ImpactInfo {
        constructor(self, other) {
            this.self = self;
            this.other = other;
        }
        get Self() {
            return this.self;
        }
        get Other() {
            return this.other;
        }
    }
    exports.ImpactInfo = ImpactInfo;
    ;
    class ImpackTask {
        constructor(onHit, onLeave) {
            this.onHit = onHit;
            this.onLeave = onLeave;
        }
        get OnHit() {
            return this.onHit;
        }
        get OnLeave() {
            return this.onLeave;
        }
    }
    exports.ImpackTask = ImpackTask;
    ;
});
define("core/services/implement/CollisionService", ["require", "exports", "core/services/implement/AbstractService", "core/services/interface/CollisionServiceInterface", "core/cntroller/GE", "util/map/Map", "util/map/MutiValueMap"], function (require, exports, AbstractService_5, CollisionServiceInterface_1, GE_3, Map_3, MutiValueMap_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CollisionService extends AbstractService_5.default {
        constructor() {
            super();
            this.objectToComponentsMap = new MutiValueMap_2.default();
            this.impackTaskMap = new Map_3.default();
            this.isObjectHittingRecord = new Map_3.default();
            this.registImpactTask = (component) => {
                if (component.OnHit || component.OnLeave) {
                    const gameObject = component.gameObject;
                    const impackTask = new CollisionServiceInterface_1.ImpackTask(component.onHit, component.onLeave);
                    this.objectToComponentsMap.add(gameObject.id, component.id);
                    this.impackTaskMap.set(component.id, impackTask);
                }
            };
            this.unRegistImpactTask = (component) => {
                const gameObject = component.gameObject;
                this.objectToComponentsMap.removeValue(gameObject.id, component.id);
                this.impackTaskMap.delete(component.id);
            };
            GE_3.default.addEventListener(GE_3.GEEvents.AddComponent, this.registImpactTask);
            GE_3.default.addEventListener(GE_3.GEEvents.RemoveComponent, this.unRegistImpactTask);
        }
        updateCollisionInfo(collision, motionInfo) {
            collision.gameObject.id;
            collision.CollisionType;
            collision.OffsetX;
            collision.OffsetY;
            motionInfo.Position;
            motionInfo.OldPosition;
            new CollisionServiceInterface_1.ImpactInstanceInfo(collision.gameObject.id, motionInfo.Position);
        }
        ;
        update() {
        }
        runOnHitTaskArray(impackInfoArray) {
            const curImpacRecord = new Map_3.default();
            for (let i = 0; i < impackInfoArray.length; i++) {
                const impackInfo = impackInfoArray[i];
                const key = this.combineId(impackInfo.Other.GameObjectId, impackInfo.Self.GameObjectId);
                curImpacRecord.set(key, true);
                if (!this.isObjectHittingRecord.get(key)) {
                    this.runOnHitTask(impackInfo);
                    this.isObjectHittingRecord.set(key, impackInfo);
                }
            }
            const lastHitedIdArray = this.isObjectHittingRecord.keys();
            for (let i = 0; i < lastHitedIdArray.length; i++) {
                const key = lastHitedIdArray[i];
                if (!curImpacRecord.get(key)) {
                    this.runOnLeaveTask(this.isObjectHittingRecord.get(key));
                    this.isObjectHittingRecord.delete(key);
                }
            }
        }
        combineId(id1, id2) {
            if (id1 > id2) {
                return `${id2}_${id1}`;
            }
            else {
                return `${id1}_${id2}`;
            }
        }
        runOnHitTask(impackInfo) {
            const objSelfTasks = [...this.getHitTasks(impackInfo.Self.GameObjectId)];
            for (let i = 0; i < objSelfTasks.length; i++) {
                try {
                    objSelfTasks[i](impackInfo.Other);
                }
                catch (e) {
                    console.error(e);
                }
            }
            const objOtherTasks = [...this.getHitTasks(impackInfo.Other.GameObjectId)];
            for (let i = 0; i < objOtherTasks.length; i++) {
                try {
                    objOtherTasks[i](impackInfo.Self);
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
        ;
        runOnLeaveTask(impactInfo) {
            const objSelfTasks = [...this.getLeaveTasks(impactInfo.Self.GameObjectId)];
            for (let i = 0; i < objSelfTasks.length; i++) {
                try {
                    objSelfTasks[i](impactInfo.Other);
                }
                catch (e) {
                    console.error(e);
                }
            }
            const objOtherTasks = [...this.getLeaveTasks(impactInfo.Other.GameObjectId)];
            for (let i = 0; i < objOtherTasks.length; i++) {
                try {
                    objOtherTasks[i](impactInfo.Self);
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
        ;
        getImpackArry(gameObjectId) {
            return this.objectToComponentsMap.get(gameObjectId).map(componentIds => this.impackTaskMap.get(componentIds));
        }
        getHitTasks(gameObjectId) {
            const tasksArray = new Array();
            const impackArry = this.getImpackArry(gameObjectId);
            for (let i = 0; i < impackArry.length; i++) {
                const impack = impackArry[i];
                if (impack && impack.OnHit) {
                    tasksArray.push(impack.OnHit);
                }
            }
            return tasksArray;
        }
        ;
        getLeaveTasks(gameObjectId) {
            const tasksArray = new Array();
            const impackArry = this.getImpackArry(gameObjectId);
            for (let i = 0; i < impackArry.length; i++) {
                const impack = impackArry[i];
                if (impack && impack.OnLeave) {
                    tasksArray.push(impack.OnLeave);
                }
            }
            return tasksArray;
        }
        ;
    }
    exports.CollisionService = CollisionService;
});
define("config/RuntimeConfig", ["require", "exports", "core/services/implement/AbstractService", "core/components/implements/AbstarctComponent", "core/services/implement/Timer", "core/services/implement/InputService", "core/services/implement/Render2DService", "core/components/implements/Position2DComponents", "core/services/implement/ResourceLoader", "core/components/implements/Render2DComponent", "core/services/implement/CollisionService"], function (require, exports, AbstractService_6, AbstarctComponent_3, Timer_1, InputService_1, Render2DService_1, Position2DComponents_3, ResourceLoader_2, Render2DComponent_1, CollisionService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ServiceNameSpaces;
    (function (ServiceNameSpaces) {
        ServiceNameSpaces[ServiceNameSpaces["Timer"] = 1] = "Timer";
        ServiceNameSpaces[ServiceNameSpaces["InputService"] = 2] = "InputService";
        ServiceNameSpaces[ServiceNameSpaces["Render2DService"] = 3] = "Render2DService";
        ServiceNameSpaces[ServiceNameSpaces["ResourceLoader"] = 4] = "ResourceLoader";
        ServiceNameSpaces[ServiceNameSpaces["Collision"] = 5] = "Collision";
    })(ServiceNameSpaces = exports.ServiceNameSpaces || (exports.ServiceNameSpaces = {}));
    exports.default = {
        services: [
            {
                namespace: ServiceNameSpaces.Timer,
                serviceClass: Timer_1.default
            },
            {
                namespace: ServiceNameSpaces.InputService,
                serviceClass: InputService_1.default,
            },
            {
                namespace: ServiceNameSpaces.Render2DService,
                serviceClass: Render2DService_1.default,
            },
            {
                namespace: ServiceNameSpaces.ResourceLoader,
                serviceClass: ResourceLoader_2.ResourceLoader,
            },
            {
                namespace: ServiceNameSpaces.Collision,
                serviceClass: CollisionService_1.CollisionService,
            },
        ],
        start: [
            {
                methodName: 'init',
                scope: [AbstractService_6.default],
            },
            {
                methodName: 'awake',
                scope: [AbstarctComponent_3.default],
            },
            {
                methodName: 'start',
                scope: [AbstarctComponent_3.default],
            },
        ],
        loop: [
            {
                methodName: 'willUpdate',
                scope: [AbstarctComponent_3.default, AbstractService_6.default],
            },
            {
                methodName: 'update',
                scope: [AbstractService_6.default, AbstarctComponent_3.default],
            },
            {
                methodName: 'render',
                scope: [Render2DComponent_1.default],
            },
            {
                methodName: 'updated',
                scope: [AbstarctComponent_3.default, AbstractService_6.default],
            },
            {
                methodName: 'afterUpdated',
                scope: [Position2DComponents_3.default],
            },
        ],
        end: [
            {
                methodName: 'destroy',
                scope: [AbstarctComponent_3.default],
            },
            {
                methodName: 'destroyed',
                scope: [AbstarctComponent_3.default],
            },
        ],
    };
});
define("core/components/implements/AbstarctComponent", ["require", "exports", "core/cntroller/implements/GEObject"], function (require, exports, GEObject_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AbstractComponent extends GEObject_3.default {
        set Services(services) {
            this.services = services;
        }
        ;
        addComponent(component) {
            return this.gameObject.addComponent(component);
        }
        ;
        removeComponent(component) {
            return this.gameObject.removeComponent(component);
        }
        ;
        getComponents(componentType) {
            return this.gameObject.getComponents(componentType);
        }
        ;
        getComponent(componentType) {
            return this.gameObject.getComponent(componentType);
        }
        ;
        getService(namespaces) {
            return this.services.get(namespaces);
        }
        ;
        getMainCamera() {
            return this.gameObject.getMainCamera();
        }
        getAllComponents() {
            return this.gameObject.getAllComponents();
        }
    }
    exports.default = AbstractComponent;
});
define("core/cntroller/interface/TaskFlowInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/cntroller/implements/TaskFlow", ["require", "exports", "util/map/Map"], function (require, exports, Map_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TaskRecord {
        constructor(priority, task) {
            this.priority = priority;
            this.task = task;
        }
    }
    class TaskFlow {
        constructor(flowName) {
            this.flowName = 'default';
            this.taskId = 1;
            this.idTaskMap = new Map_4.default();
            this.tasks = new Array();
            this.flowName = flowName;
        }
        addTask(priority, task) {
            let taskArray = this.tasks[priority];
            if (!taskArray) {
                taskArray = new Array();
                this.tasks[priority] = taskArray;
            }
            const taskId = `${this.flowName}_${this.taskId++}`;
            this.idTaskMap.set(taskId, new TaskRecord(priority, task));
            taskArray.push(task);
            return taskId;
        }
        deleteTask(taskId) {
            const taskRecord = this.idTaskMap.get(taskId);
            if (taskRecord) {
                const taskArray = this.tasks[taskRecord.priority];
                if (taskArray) {
                    const taskInd = taskArray.indexOf(taskRecord.task);
                    if (taskInd > -1) {
                        taskArray.splice(taskInd, 1);
                        this.idTaskMap.delete(taskId);
                    }
                }
            }
        }
        runTask() {
            for (let currentPriority = 0; currentPriority < this.tasks.length; currentPriority++) {
                const taskArry = this.tasks[currentPriority] || [];
                for (let taskInd = 0; taskInd < taskArry.length; taskInd++) {
                    try {
                        taskArry[taskInd]();
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
            }
        }
        ;
        clearAll() {
            this.idTaskMap = new Map_4.default();
            this.tasks = new Array();
        }
    }
    exports.TaskFlow = TaskFlow;
});
define("core/cntroller/interface/TaskManagerInterface", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("core/cntroller/implements/TaskManager", ["require", "exports", "core/cntroller/implements/TaskFlow", "util/map/Map", "util/ArraySet"], function (require, exports, TaskFlow_1, Map_5, ArraySet_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ComponentTaskIds {
        constructor(startTaskId, loopTaskId, endTaskId) {
            this.start = startTaskId;
            this.loop = loopTaskId;
            this.end = endTaskId;
        }
    }
    var TaskType;
    (function (TaskType) {
        TaskType["START"] = "start";
        TaskType["LOOP"] = "loop";
        TaskType["END"] = "end";
    })(TaskType || (TaskType = {}));
    ;
    class TypeToMethodsMap {
        constructor() {
            this.start = new Map_5.default();
            this.loop = new Map_5.default();
            this.end = new Map_5.default();
        }
    }
    class TaskConfig {
        constructor(runTimeConfig) {
            this.configTypeSet = new Map_5.default();
            this.typeToMethodsMap = new TypeToMethodsMap();
            this.methodNameToPriority = new Map_5.default();
            this.init(runTimeConfig);
            this.serviceConfigTypeArry = runTimeConfig.services;
        }
        init(runTimeConfig) {
            this.initTasks(runTimeConfig, TaskType.START);
            this.initTasks(runTimeConfig, TaskType.LOOP);
            this.initTasks(runTimeConfig, TaskType.END);
        }
        get ServiceConfigTypeArry() {
            return this.serviceConfigTypeArry;
        }
        ;
        get ConfigTypeSet() {
            return this.configTypeSet;
        }
        ;
        initTasks(runTimeConfig, taskType) {
            const taskCfg = runTimeConfig[taskType];
            let typeSet = this.configTypeSet.get(taskType);
            if (!typeSet) {
                typeSet = new ArraySet_2.default();
                this.configTypeSet.set(taskType, typeSet);
            }
            taskCfg.map((item, priority) => {
                const types = item.scope;
                const methodName = item.methodName;
                types.map(type => {
                    typeSet.add(type);
                    const map = this.typeToMethodsMap[taskType];
                    let methodSet = map.get(type);
                    if (!methodSet) {
                        methodSet = new ArraySet_2.default();
                        map.set(type, methodSet);
                    }
                    methodSet.add(methodName);
                });
                this.methodNameToPriority.set(methodName, priority);
            });
        }
        ;
        getMethodListByInstance(GEObjectInstance, type) {
            const typeSet = this.typeToMethodsMap[type];
            const classList = typeSet.keys();
            const methodArraySet = new ArraySet_2.default();
            for (let i = 0; i < classList.length; i++) {
                if (GEObjectInstance instanceof classList[i]) {
                    methodArraySet.concat(typeSet.get(classList[i]));
                }
            }
            return methodArraySet;
        }
        ;
        getPriorityByMethodName(methodName) {
            return this.methodNameToPriority.get(methodName) || 0;
        }
        ;
    }
    class TaskManager {
        constructor(runTimeConfig) {
            this.start = new TaskFlow_1.TaskFlow('start_flow');
            this.loop = new TaskFlow_1.TaskFlow('loop_flow');
            this.end = new TaskFlow_1.TaskFlow('end_flow');
            this.componentTaskIdsMap = new Map_5.default();
            this.serviceInstances = new Map_5.default();
            this.taskConfig = new TaskConfig(runTimeConfig);
            this.createServiceTask();
        }
        createServiceTask() {
            this.taskConfig.ServiceConfigTypeArry.map(serviceConfig => {
                const { namespace, serviceClass } = serviceConfig;
                const serviceInstances = new serviceClass();
                this.serviceInstances.set(namespace, serviceInstances);
                this.addTasks(serviceInstances, TaskType.START);
                this.addTasks(serviceInstances, TaskType.LOOP);
                this.addTasks(serviceInstances, TaskType.END);
            });
        }
        ;
        addComponentTask(gameObject, component) {
            const startIds = this.addTasks(component, TaskType.START);
            const loopIds = this.addTasks(component, TaskType.LOOP);
            const endIds = this.addTasks(component, TaskType.END);
            this.componentTaskIdsMap.set(`${gameObject.id}_${component.id}`, new ComponentTaskIds(startIds, loopIds, endIds));
        }
        ;
        get ServiceInstances() {
            return this.serviceInstances;
        }
        addTasks(instance, taskType) {
            const methodList = this.taskConfig.getMethodListByInstance(instance, taskType);
            const idArry = new Array();
            methodList.map(methodName => {
                const task = instance[methodName];
                if (task) {
                    const taskId = this[taskType].addTask(this.taskConfig.getPriorityByMethodName(methodName), task.bind(instance));
                    idArry.push(taskId);
                }
            });
            return idArry;
        }
        ;
        removeComponentAllTask(gameObject, component) {
            const recordId = `${gameObject.id}_${component.id}`;
            const componentTaskIds = this.componentTaskIdsMap.get(recordId);
            this.removeComponentTasks(componentTaskIds, TaskType.START);
            this.removeComponentTasks(componentTaskIds, TaskType.LOOP);
            this.removeComponentTasks(componentTaskIds, TaskType.END);
            this.componentTaskIdsMap.delete(recordId);
        }
        ;
        removeComponentTasks(componentTaskIds, taskType) {
            const taskIds = componentTaskIds[taskType];
            if (taskIds) {
                taskIds.map(taskId => {
                    this[taskType].deleteTask(taskId);
                });
            }
        }
        ;
        removeAllStartTask() {
            this.start.clearAll();
        }
        runAllStartTask() {
            this.start.runTask();
        }
        runAllLoopTask() {
            this.loop.runTask();
        }
        runAllEndTask() {
            this.end.runTask();
        }
    }
    exports.default = TaskManager;
});
define("util/event/EventEmitor", ["require", "exports", "util/map/MutiValueMap"], function (require, exports, MutiValueMap_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class EventEmitor {
        constructor() {
            this.listeners = new MutiValueMap_3.default();
        }
        addEventListener(eventName, fun) {
            this.listeners.add(eventName, fun);
        }
        removeEventListener(eventName, fun) {
            this.listeners.removeValue(eventName, fun);
        }
        emit(eventName, ...params) {
            const listeners = [...this.listeners.get(eventName).valus()];
            for (let i = 0; i < listeners.length; i++) {
                try {
                    listeners[i](...params);
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
    }
    exports.default = EventEmitor;
});
define("core/cntroller/GE", ["require", "exports", "core/cntroller/implements/TaskManager", "config/RuntimeConfig", "util/event/EventEmitor"], function (require, exports, TaskManager_1, RuntimeConfig_2, EventEmitor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GEEvents;
    (function (GEEvents) {
        GEEvents["AddComponent"] = "addComp";
        GEEvents["RemoveComponent"] = "removeComponent";
        GEEvents["SetMainCamera"] = "setMainCamera";
    })(GEEvents = exports.GEEvents || (exports.GEEvents = {}));
    class GE {
        static init() {
            this.taskManager = new TaskManager_1.default(RuntimeConfig_2.default);
            this.init = () => {
                throw 'init complete!';
            };
        }
        static addEventListener(GEEvent, fun) {
            this.eventEmitor.addEventListener(GEEvent, fun);
        }
        ;
        static removeEventListener(GEEvent, fun) {
            this.eventEmitor.removeEventListener(GEEvent, fun);
        }
        static getMainCamera() {
            return this.mainCamera;
        }
        static setMainCamera(camera) {
            this.mainCamera = camera;
            this.eventEmitor.emit(GEEvents.SetMainCamera);
        }
        static run() {
            console.time('GE RUN');
            if (this.hasNewComponent) {
                this.taskManager.runAllStartTask();
                this.taskManager.removeAllStartTask();
                this.hasNewComponent = false;
            }
            this.taskManager.runAllLoopTask();
            console.timeEnd('GE RUN');
            window.requestAnimationFrame(() => {
                this.run();
            });
        }
        ;
        static getServiceMap() {
            return this.taskManager.ServiceInstances;
        }
        static tempRun() {
        }
        ;
        static pause() {
            this.tempRun = this.run;
            this.run = () => { };
            this.isPause = true;
        }
        ;
        static start() {
            if (this.isPause) {
                this.isPause = false;
                this.run = this.tempRun;
            }
            this.run();
        }
        static addComponent(gemeObject, component) {
            this.hasNewComponent = true;
            this.taskManager.addComponentTask(gemeObject, component);
            this.eventEmitor.emit(GEEvents.AddComponent, component);
        }
        ;
        static removeComponent(gemeObject, component) {
            this.taskManager.removeComponentAllTask(gemeObject, component);
            this.eventEmitor.emit(GEEvents.RemoveComponent, component);
        }
        ;
        static destoryGameObject(gemeObject) {
        }
    }
    GE.isPause = false;
    GE.hasNewComponent = true;
    GE.eventEmitor = new EventEmitor_1.default();
    exports.default = GE;
});
define("core/components/implements/TestComponents", ["require", "exports", "core/components/implements/AbstarctComponent", "config/RuntimeConfig"], function (require, exports, AbstarctComponent_4, RuntimeConfig_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TestComponents extends AbstarctComponent_4.default {
        constructor() {
            super();
        }
        awake() {
            console.log('awake...');
            this.timer = this.getService(RuntimeConfig_3.ServiceNameSpaces.Timer);
            this.input = this.getService(RuntimeConfig_3.ServiceNameSpaces.InputService);
        }
        start() {
            console.log('start....');
        }
        willUpdate() {
            console.log(`willUpdate...${this.timer.DealTime}`);
        }
        update() {
            console.log(`update...`);
        }
        updated() {
            console.log('updated...');
        }
        destroy() {
            console.log('destroy...');
        }
        destroyed() {
            console.log('destroyed...');
        }
    }
    exports.default = TestComponents;
});
define("core/components/implements/MoveComponent", ["require", "exports", "core/components/implements/AbstarctComponent", "core/services/interface/InputServiceInterface", "config/RuntimeConfig", "core/components/implements/Position2DComponents"], function (require, exports, AbstarctComponent_5, InputServiceInterface_1, RuntimeConfig_4, Position2DComponents_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class MoveComponent extends AbstarctComponent_5.default {
        constructor() {
            super();
            this.speed = 100;
        }
        get Speed() {
            return this.speed;
        }
        set Speed(speed) {
            this.speed = speed;
        }
        awake() {
            this.input = this.getService(RuntimeConfig_4.ServiceNameSpaces.InputService);
            this.positionComp = this.getComponent(Position2DComponents_4.default);
            this.timer = this.getService(RuntimeConfig_4.ServiceNameSpaces.Timer);
            this.mainCamera = this.getMainCamera();
        }
        update() {
            if (this.input.isKeyDown(InputServiceInterface_1.KeyBoard.a) || this.input.isKeyDown(InputServiceInterface_1.KeyBoard.A)) {
                this.positionComp.X -= this.timer.DealTime * this.speed;
            }
            else if (this.input.isKeyDown(InputServiceInterface_1.KeyBoard.d) || this.input.isKeyDown(InputServiceInterface_1.KeyBoard.D)) {
                this.positionComp.X += this.timer.DealTime * this.speed;
            }
            else if (this.input.isKeyDown(InputServiceInterface_1.KeyBoard.W) || this.input.isKeyDown(InputServiceInterface_1.KeyBoard.w)) {
                this.positionComp.Y -= this.timer.DealTime * this.speed;
            }
            else if (this.input.isKeyDown(InputServiceInterface_1.KeyBoard.s) || this.input.isKeyDown(InputServiceInterface_1.KeyBoard.S)) {
                this.positionComp.Y += this.timer.DealTime * this.speed;
            }
        }
    }
    exports.default = MoveComponent;
});
define("core/gameObject/implement/TestGameObject", ["require", "exports", "core/gameObject/implement/GameObject", "core/components/implements/Position2DComponents", "core/components/implements/Render2DComponent", "core/components/implements/MoveComponent"], function (require, exports, GameObject_2, Position2DComponents_5, Render2DComponent_2, MoveComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TestGameObject extends GameObject_2.default {
        constructor() {
            super();
            this.addComponent(new Position2DComponents_5.default());
            this.addComponent(new Render2DComponent_2.default(new Render2DComponent_2.RectCanvas(100, 100, '#808080').Canvas));
            this.addComponent(new MoveComponent_1.default()).Speed = 300;
        }
    }
    exports.default = TestGameObject;
});
define("index", ["require", "exports", "core/cntroller/GE", "core/gameObject/implement/TestGameObject", "core/gameObject/implement/Camera2D"], function (require, exports, GE_4, TestGameObject_1, Camera2D_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    GE_4.default.init();
    GE_4.default.setMainCamera(new Camera2D_1.default());
    GE_4.default.start();
    const testGameObject = new TestGameObject_1.default();
});
define("core/components/implements/Collision2DComponent", ["require", "exports", "core/components/implements/AbstarctComponent", "config/RuntimeConfig", "core/components/implements/Position2DComponents", "util/data/Vector2D"], function (require, exports, AbstarctComponent_6, RuntimeConfig_5, Position2DComponents_6, Vector2D_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Collision2DComponent extends AbstarctComponent_6.default {
        constructor(width, height, offsetX, offsetY, collisionType) {
            super();
            this.width = width || 0;
            this.height = height || 0;
            this.offsetX = offsetX || 0;
            this.offsetY = offsetY || 0;
            this.collisionType = collisionType;
        }
        ;
        get CollisionType() {
            return this.collisionType;
        }
        get Width() {
            return this.width;
        }
        get Height() {
            return this.height;
        }
        get OffsetX() {
            return this.offsetX;
        }
        get OffsetY() {
            return this.offsetY;
        }
        init() {
            this.collisionService = this.getService(RuntimeConfig_5.ServiceNameSpaces.Collision);
            this.positionComp = this.getComponent(Position2DComponents_6.default);
        }
        update() {
            const oldPostion = new Vector2D_2.default(this.positionComp.OldX, this.positionComp.OldY);
            const position = new Vector2D_2.default(this.positionComp.X, this.positionComp.Y);
        }
    }
    exports.default = Collision2DComponent;
});
define("util/ClassType", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ClassType {
        static isChildClass(childClass, superClass) {
            let result = false;
            if (childClass && superClass && childClass !== superClass) {
                const childClassInstasce = new childClass();
                result = childClassInstasce instanceof superClass && childClassInstasce;
            }
            return result;
        }
    }
    exports.default = ClassType;
});
//# sourceMappingURL=index.js.map