/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/RuntimeConfig.ts":
/*!*************************************!*\
  !*** ./src/config/RuntimeConfig.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstractService_1 = __webpack_require__(/*! ../core/services/implement/AbstractService */ \"./src/core/services/implement/AbstractService.ts\");\nconst AbstarctComponent_1 = __webpack_require__(/*! ../core/components/implements/AbstarctComponent */ \"./src/core/components/implements/AbstarctComponent.ts\");\nconst Timer_1 = __webpack_require__(/*! ../core/services/implement/Timer */ \"./src/core/services/implement/Timer.ts\");\nconst InputService_1 = __webpack_require__(/*! ../core/services/implement/InputService */ \"./src/core/services/implement/InputService.ts\");\nconst Render2DService_1 = __webpack_require__(/*! ../core/services/implement/Render2DService */ \"./src/core/services/implement/Render2DService.ts\");\nconst Position2DComponents_1 = __webpack_require__(/*! ../core/components/implements/Position2DComponents */ \"./src/core/components/implements/Position2DComponents.ts\");\nconst ResourceLoader_1 = __webpack_require__(/*! ../core/services/implement/ResourceLoader */ \"./src/core/services/implement/ResourceLoader.ts\");\nconst Render2DComponent_1 = __webpack_require__(/*! ../core/components/implements/Render2DComponent */ \"./src/core/components/implements/Render2DComponent.ts\");\nconst CollisionService_1 = __webpack_require__(/*! ../core/services/implement/CollisionService */ \"./src/core/services/implement/CollisionService.ts\");\nconst Camera2DService_1 = __webpack_require__(/*! ../core/services/implement/Camera2DService */ \"./src/core/services/implement/Camera2DService.ts\");\nconst Enum_1 = __webpack_require__(/*! ../util/data/Enum */ \"./src/util/data/Enum.ts\");\n/**\n * 定义各个阶段的回调函数.与作用的类型.\n */\nexports.default = {\n    services: [\n        {\n            namespace: Enum_1.ServiceNameSpaces.Timer,\n            serviceClass: Timer_1.default\n        },\n        {\n            namespace: Enum_1.ServiceNameSpaces.InputService,\n            serviceClass: InputService_1.default,\n        },\n        {\n            namespace: Enum_1.ServiceNameSpaces.Render2DService,\n            serviceClass: Render2DService_1.default,\n        },\n        {\n            namespace: Enum_1.ServiceNameSpaces.ResourceLoader,\n            serviceClass: ResourceLoader_1.ResourceLoader,\n        },\n        {\n            namespace: Enum_1.ServiceNameSpaces.Collision,\n            serviceClass: CollisionService_1.CollisionService,\n        },\n        {\n            namespace: Enum_1.ServiceNameSpaces.Camera2D,\n            serviceClass: Camera2DService_1.default,\n        },\n    ],\n    start: [\n        {\n            methodName: 'awake',\n            scope: [AbstarctComponent_1.default],\n        },\n        {\n            methodName: 'init',\n            scope: [AbstractService_1.default],\n        },\n        {\n            methodName: 'start',\n            scope: [AbstarctComponent_1.default],\n        },\n    ],\n    loop: [\n        {\n            methodName: 'willUpdate',\n            scope: [AbstarctComponent_1.default, AbstractService_1.default],\n        },\n        {\n            methodName: 'update',\n            scope: [AbstractService_1.default, AbstarctComponent_1.default],\n        },\n        {\n            methodName: 'render',\n            scope: [Render2DComponent_1.default],\n        },\n        {\n            methodName: 'updated',\n            scope: [AbstarctComponent_1.default, AbstractService_1.default],\n        },\n        {\n            methodName: 'afterUpdated',\n            scope: [Position2DComponents_1.default],\n        },\n    ],\n    end: [\n        {\n            methodName: 'destroy',\n            scope: [AbstarctComponent_1.default],\n        },\n        {\n            methodName: 'destroyed',\n            scope: [AbstarctComponent_1.default],\n        },\n    ],\n};\n\n\n//# sourceURL=webpack:///./src/config/RuntimeConfig.ts?");

/***/ }),

/***/ "./src/core/cntroller/implements/GE.ts":
/*!*********************************************!*\
  !*** ./src/core/cntroller/implements/GE.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst TaskManager_1 = __webpack_require__(/*! ./TaskManager */ \"./src/core/cntroller/implements/TaskManager.ts\");\nconst RuntimeConfig_1 = __webpack_require__(/*! ../../../config/RuntimeConfig */ \"./src/config/RuntimeConfig.ts\");\nconst EventEmitor_1 = __webpack_require__(/*! ../../../util/event/EventEmitor */ \"./src/util/event/EventEmitor.ts\");\nconst GEInterfece_1 = __webpack_require__(/*! ../interface/GEInterfece */ \"./src/core/cntroller/interface/GEInterfece.ts\");\n/**\n * 根据配置调度各个组件与服务的方法.\n */\nclass GE {\n    static init() {\n        this.taskManager = new TaskManager_1.default(RuntimeConfig_1.default);\n        this.init = () => {\n            throw new Error('init has completed!');\n        };\n    }\n    // public static addEventListener(GEEvent: GEEvents, fun:Function){\n    //     this.eventEmitor.addEventListener(GEEvent, fun);\n    // };\n    // public static removeEventListener(GEEvent:GEEvents, fun:Function){\n    //     this.eventEmitor.removeEventListener(GEEvent,fun);\n    // }\n    static publishComponentEvent(eventName, ...params) {\n        this.eventEmitor.emit(eventName, ...params);\n    }\n    ;\n    static subscribeComponentEvent(eventName, fun) {\n        this.eventEmitor.addEventListener(eventName, fun);\n    }\n    ;\n    static unSubscribeComponentEvent(eventName, fun) {\n        this.eventEmitor.removeEventListener(eventName, fun);\n    }\n    ;\n    static run() {\n        console.time('GE RUN');\n        if (this.hasNewComponent) {\n            this.taskManager.runAllStartTask();\n            this.taskManager.removeAllStartTask();\n            this.hasNewComponent = false;\n        }\n        this.taskManager.runAllLoopTask();\n        console.timeEnd('GE RUN');\n        window.requestAnimationFrame(() => {\n            this.run();\n        });\n    }\n    ;\n    static getServiceMap() {\n        return this.taskManager.ServiceInstances;\n    }\n    static tempRun() {\n    }\n    ;\n    static pause() {\n        this.tempRun = this.run;\n        this.run = () => { };\n        this.isPause = true;\n    }\n    ;\n    static start() {\n        if (this.isPause) {\n            this.isPause = false;\n            this.run = this.tempRun;\n        }\n        this.run();\n    }\n    static addComponent(gemeObject, component) {\n        this.hasNewComponent = true;\n        this.taskManager.addComponentTask(gemeObject, component);\n        this.eventEmitor.emit(GEInterfece_1.GEEvents.AddComponent, component);\n    }\n    ;\n    static removeComponent(gemeObject, component) {\n        this.taskManager.removeComponentAllTask(gemeObject, component);\n        this.eventEmitor.emit(GEInterfece_1.GEEvents.RemoveComponent, component);\n    }\n    ;\n    //TODO\n    static destoryGameObject(gemeObject) {\n    }\n}\nGE.isPause = false;\nGE.hasNewComponent = true;\nGE.eventEmitor = new EventEmitor_1.default();\nexports.default = GE;\n\n\n//# sourceURL=webpack:///./src/core/cntroller/implements/GE.ts?");

/***/ }),

/***/ "./src/core/cntroller/implements/GEObject.ts":
/*!***************************************************!*\
  !*** ./src/core/cntroller/implements/GEObject.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst uuid_1 = __webpack_require__(/*! ../../../util/uuid */ \"./src/util/uuid.ts\");\nclass GEObject {\n    constructor() {\n        this.id = 0;\n        this.constructorFunction = this.constructor;\n        this.id = uuid_1.Uuid.getUuid();\n    }\n    get Id() {\n        // return ;\n        return this.id;\n    }\n}\nexports.default = GEObject;\n\n\n//# sourceURL=webpack:///./src/core/cntroller/implements/GEObject.ts?");

/***/ }),

/***/ "./src/core/cntroller/implements/TaskFlow.ts":
/*!***************************************************!*\
  !*** ./src/core/cntroller/implements/TaskFlow.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Map_1 = __webpack_require__(/*! ../../../util/map/Map */ \"./src/util/map/Map.ts\");\nclass TaskRecord {\n    constructor(priority, task) {\n        this.priority = priority;\n        this.task = task;\n    }\n}\nclass TaskFlow {\n    constructor(flowName) {\n        this.flowName = 'default';\n        this.taskId = 1;\n        this.idTaskMap = new Map_1.default();\n        this.tasks = new Array();\n        this.flowName = flowName;\n    }\n    /**\n    *\n    *按照优先级执行task.\n    * @param priority 优先级 > 0.\n    * @param task 执行的方法.\n    * @returns 任务的ID.\n    */\n    addTask(priority, task) {\n        let taskArray = this.tasks[priority];\n        if (!taskArray) {\n            taskArray = new Array();\n            this.tasks[priority] = taskArray;\n        }\n        const taskId = `${this.flowName}_${this.taskId++}`;\n        this.idTaskMap.set(taskId, new TaskRecord(priority, task));\n        taskArray.push(task);\n        return taskId;\n    }\n    /**\n     * 总任务队列中删除任务.\n     * @param taskId 被删除的任务的 taskId.\n     */\n    deleteTask(taskId) {\n        const taskRecord = this.idTaskMap.get(taskId);\n        if (taskRecord) {\n            const taskArray = this.tasks[taskRecord.priority];\n            if (taskArray) {\n                const taskInd = taskArray.indexOf(taskRecord.task);\n                if (taskInd > -1) {\n                    taskArray.splice(taskInd, 1);\n                    this.idTaskMap.delete(taskId);\n                }\n            }\n        }\n    }\n    /**\n     * 按照优先级执行task.\n     */\n    runTask() {\n        for (let currentPriority = 0; currentPriority < this.tasks.length; currentPriority++) {\n            const taskArry = this.tasks[currentPriority] || [];\n            for (let taskInd = 0; taskInd < taskArry.length; taskInd++) {\n                taskArry[taskInd]();\n                // try{\n                //     taskArry[taskInd]();\n                // }catch(e){\n                //     console.error(e);\n                // }\n            }\n        }\n    }\n    ;\n    clearAll() {\n        this.idTaskMap = new Map_1.default();\n        this.tasks = new Array();\n    }\n}\nexports.TaskFlow = TaskFlow;\n\n\n//# sourceURL=webpack:///./src/core/cntroller/implements/TaskFlow.ts?");

/***/ }),

/***/ "./src/core/cntroller/implements/TaskManager.ts":
/*!******************************************************!*\
  !*** ./src/core/cntroller/implements/TaskManager.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst TaskFlow_1 = __webpack_require__(/*! ./TaskFlow */ \"./src/core/cntroller/implements/TaskFlow.ts\");\nconst Map_1 = __webpack_require__(/*! ../../../util/map/Map */ \"./src/util/map/Map.ts\");\nconst ArraySet_1 = __webpack_require__(/*! ../../../util/ArraySet */ \"./src/util/ArraySet.ts\");\nclass ComponentTaskIds {\n    constructor(startTaskId, loopTaskId, endTaskId) {\n        this.start = startTaskId;\n        this.loop = loopTaskId;\n        this.end = endTaskId;\n    }\n}\nvar TaskType;\n(function (TaskType) {\n    TaskType[\"START\"] = \"start\";\n    TaskType[\"LOOP\"] = \"loop\";\n    TaskType[\"END\"] = \"end\";\n})(TaskType || (TaskType = {}));\n;\nclass TypeToMethodsMap {\n    constructor() {\n        this.start = new Map_1.default();\n        this.loop = new Map_1.default();\n        this.end = new Map_1.default();\n    }\n}\nclass TaskConfig {\n    constructor(runTimeConfig) {\n        this.configTypeSet = new Map_1.default();\n        this.typeToMethodsMap = new TypeToMethodsMap();\n        this.methodNameToPriority = new Map_1.default();\n        this.init(runTimeConfig);\n        this.serviceConfigTypeArry = runTimeConfig.services;\n    }\n    init(runTimeConfig) {\n        this.initTasks(runTimeConfig, TaskType.START);\n        this.initTasks(runTimeConfig, TaskType.LOOP);\n        this.initTasks(runTimeConfig, TaskType.END);\n    }\n    get ServiceConfigTypeArry() {\n        return this.serviceConfigTypeArry;\n    }\n    ;\n    get ConfigTypeSet() {\n        return this.configTypeSet;\n    }\n    ;\n    initTasks(runTimeConfig, taskType) {\n        const taskCfg = runTimeConfig[taskType];\n        let typeSet = this.configTypeSet.get(taskType);\n        if (!typeSet) {\n            typeSet = new ArraySet_1.default();\n            this.configTypeSet.set(taskType, typeSet);\n        }\n        taskCfg.map((item, priority) => {\n            const types = item.scope;\n            const methodName = item.methodName;\n            types.map(type => {\n                typeSet.add(type);\n                const map = this.typeToMethodsMap[taskType];\n                let methodSet = map.get(type);\n                if (!methodSet) {\n                    methodSet = new ArraySet_1.default();\n                    map.set(type, methodSet);\n                }\n                methodSet.add(methodName);\n            });\n            this.methodNameToPriority.set(methodName, priority);\n        });\n    }\n    ;\n    getMethodListByInstance(GEObjectInstance, type) {\n        const typeSet = this.typeToMethodsMap[type];\n        const classList = typeSet.keys();\n        const methodArraySet = new ArraySet_1.default();\n        for (let i = 0; i < classList.length; i++) {\n            if (GEObjectInstance instanceof classList[i]) {\n                methodArraySet.concat(typeSet.get(classList[i]));\n            }\n        }\n        return methodArraySet;\n    }\n    ;\n    getPriorityByMethodName(methodName) {\n        return this.methodNameToPriority.get(methodName) || 0;\n    }\n    ;\n}\n/***\n * 根据配置注册逐渐的回调任务.\n */\nclass TaskManager {\n    constructor(runTimeConfig) {\n        this.start = new TaskFlow_1.TaskFlow('start_flow');\n        this.loop = new TaskFlow_1.TaskFlow('loop_flow');\n        this.end = new TaskFlow_1.TaskFlow('end_flow');\n        this.componentTaskIdsMap = new Map_1.default();\n        this.serviceInstances = new Map_1.default();\n        this.taskConfig = new TaskConfig(runTimeConfig);\n        this.createServiceTask();\n    }\n    createServiceTask() {\n        this.taskConfig.ServiceConfigTypeArry.map(serviceConfig => {\n            const { namespace, serviceClass } = serviceConfig;\n            const serviceInstances = new serviceClass();\n            this.serviceInstances.set(namespace, serviceInstances);\n            this.addTasks(serviceInstances, TaskType.START);\n            this.addTasks(serviceInstances, TaskType.LOOP);\n            this.addTasks(serviceInstances, TaskType.END);\n        });\n    }\n    ;\n    /**\n     * 装载任务.\n     */\n    addComponentTask(gameObject, component) {\n        const startIds = this.addTasks(component, TaskType.START);\n        const loopIds = this.addTasks(component, TaskType.LOOP);\n        const endIds = this.addTasks(component, TaskType.END);\n        this.componentTaskIdsMap.set(`${gameObject.Id}_${component.Id}`, new ComponentTaskIds(startIds, loopIds, endIds));\n    }\n    ;\n    get ServiceInstances() {\n        return this.serviceInstances;\n    }\n    addTasks(instance, taskType) {\n        const methodList = this.taskConfig.getMethodListByInstance(instance, taskType);\n        const idArry = new Array();\n        methodList.map(methodName => {\n            const task = instance[methodName];\n            if (task) {\n                const taskId = this[taskType].addTask(this.taskConfig.getPriorityByMethodName(methodName), task.bind(instance));\n                idArry.push(taskId);\n            }\n        });\n        return idArry;\n    }\n    ;\n    /***\n     * 移除组件所有任务.\n     */\n    removeComponentAllTask(gameObject, component) {\n        const recordId = `${gameObject.Id}_${component.Id}`;\n        const componentTaskIds = this.componentTaskIdsMap.get(recordId);\n        this.removeComponentTasks(componentTaskIds, TaskType.START);\n        this.removeComponentTasks(componentTaskIds, TaskType.LOOP);\n        this.removeComponentTasks(componentTaskIds, TaskType.END);\n        this.componentTaskIdsMap.delete(recordId);\n    }\n    ;\n    removeComponentTasks(componentTaskIds, taskType) {\n        const taskIds = componentTaskIds[taskType];\n        if (taskIds) {\n            taskIds.map(taskId => {\n                this[taskType].deleteTask(taskId);\n            });\n        }\n    }\n    ;\n    removeAllStartTask() {\n        this.start.clearAll();\n        // const recordIdArray = this.componentTaskIdsMap.keys();\n        // for(let i = 0; i< recordIdArray.length; i++){\n        //     const componentTaskIds = this.componentTaskIdsMap.get(recordIdArray[i])\n        //     this.removeComponentTasks(componentTaskIds, TaskType.START);\n        // }\n    }\n    runAllStartTask() {\n        this.start.runTask();\n    }\n    runAllLoopTask() {\n        this.loop.runTask();\n    }\n    runAllEndTask() {\n        this.end.runTask();\n    }\n}\nexports.default = TaskManager;\n\n\n//# sourceURL=webpack:///./src/core/cntroller/implements/TaskManager.ts?");

/***/ }),

/***/ "./src/core/cntroller/interface/GEInterfece.ts":
/*!*****************************************************!*\
  !*** ./src/core/cntroller/interface/GEInterfece.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar GEEvents;\n(function (GEEvents) {\n    GEEvents[\"AddComponent\"] = \"addComp\";\n    GEEvents[\"RemoveComponent\"] = \"removeComponent\";\n})(GEEvents = exports.GEEvents || (exports.GEEvents = {}));\n\n\n//# sourceURL=webpack:///./src/core/cntroller/interface/GEInterfece.ts?");

/***/ }),

/***/ "./src/core/components/implements/AbstarctComponent.ts":
/*!*************************************************************!*\
  !*** ./src/core/components/implements/AbstarctComponent.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst GEObject_1 = __webpack_require__(/*! ../../cntroller/implements/GEObject */ \"./src/core/cntroller/implements/GEObject.ts\");\nconst GE_1 = __webpack_require__(/*! ../../cntroller/implements/GE */ \"./src/core/cntroller/implements/GE.ts\");\nclass AbstractComponent extends GEObject_1.default {\n    get NameSpace() {\n        return this.nameSpace;\n    }\n    set Services(services) {\n        this.services = services;\n    }\n    ;\n    addComponent(component) {\n        return this.gameObject.addComponent(component);\n    }\n    ;\n    removeComponent(component) {\n        return this.gameObject.removeComponent(component);\n    }\n    ;\n    getComponents(componentNameSpace) {\n        return this.gameObject.getComponents(componentNameSpace);\n    }\n    ;\n    getComponent(componentNameSpace) {\n        return this.gameObject.getComponent(componentNameSpace);\n    }\n    ;\n    getService(namespaces) {\n        return this.services.get(namespaces);\n    }\n    ;\n    getAllComponents() {\n        return this.gameObject.getAllComponents();\n    }\n    ;\n    publishEvent(componentEvent, ...params) {\n        GE_1.default.publishComponentEvent(componentEvent, ...params);\n    }\n    ;\n}\nexports.default = AbstractComponent;\n\n\n//# sourceURL=webpack:///./src/core/components/implements/AbstarctComponent.ts?");

/***/ }),

/***/ "./src/core/components/implements/Camera2DComponent.ts":
/*!*************************************************************!*\
  !*** ./src/core/components/implements/Camera2DComponent.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstarctComponent_1 = __webpack_require__(/*! ./AbstarctComponent */ \"./src/core/components/implements/AbstarctComponent.ts\");\nconst Enum_1 = __webpack_require__(/*! ../../../util/data/Enum */ \"./src/util/data/Enum.ts\");\nconst Vector2D_1 = __webpack_require__(/*! ../../../util/data/Vector2D */ \"./src/util/data/Vector2D.ts\");\nclass Camera2DComponent extends AbstarctComponent_1.default {\n    constructor(layer, width, height, screenX, screenY) {\n        super();\n        this.width = 0;\n        this.height = 0;\n        this.layer = 0;\n        this.canvas = document.createElement('canvas');\n        this.screenX = 0;\n        this.screenY = 0;\n        this.isDirty = true;\n        this.nameSpace = Enum_1.ComponentNameSpace.Camera2DComponent;\n        this.layer = layer || 0;\n        this.width = width || window.innerWidth;\n        this.height = height || window.innerHeight;\n        this.screenX = screenX || 0;\n        this.screenY = screenY || 0;\n        this.canvas.width = this.width;\n        this.canvas.height = this.height;\n        this.context = this.canvas.getContext('2d');\n    }\n    get Width() {\n        return this.width;\n    }\n    get Height() {\n        return this.height;\n    }\n    get Layer() {\n        return this.layer;\n    }\n    get Canvas() {\n        return this.canvas;\n    }\n    get Context() {\n        return this.context;\n    }\n    get IsDirty() {\n        return this.isDirty || this.position.IsDirty;\n    }\n    awake() {\n        this.position = this.getComponent(Enum_1.ComponentNameSpace.Position2DComponents);\n    }\n    getPosition() {\n        return new Vector2D_1.default(this.position.X, this.position.Y);\n    }\n    getScreenPosition() {\n        return new Vector2D_1.default(this.screenX, this.screenY);\n    }\n    render(canvas, x, y) {\n        this.context.drawImage(canvas, x - this.position.X, y - this.position.Y);\n        this.isDirty = true;\n    }\n    clear() {\n        this.context.clearRect(0, 0, this.width, this.height);\n        this.isDirty = false;\n    }\n}\nexports.default = Camera2DComponent;\n\n\n//# sourceURL=webpack:///./src/core/components/implements/Camera2DComponent.ts?");

/***/ }),

/***/ "./src/core/components/implements/MoveComponent.ts":
/*!*********************************************************!*\
  !*** ./src/core/components/implements/MoveComponent.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstarctComponent_1 = __webpack_require__(/*! ./AbstarctComponent */ \"./src/core/components/implements/AbstarctComponent.ts\");\nconst InputServiceInterface_1 = __webpack_require__(/*! ../../services/interface/InputServiceInterface */ \"./src/core/services/interface/InputServiceInterface.ts\");\nconst Enum_1 = __webpack_require__(/*! ../../../util/data/Enum */ \"./src/util/data/Enum.ts\");\nclass MoveComponent extends AbstarctComponent_1.default {\n    constructor() {\n        super();\n        this.speed = 100;\n        this.nameSpace = Enum_1.ComponentNameSpace.MoveComponent;\n    }\n    get Speed() {\n        return this.speed;\n    }\n    set Speed(speed) {\n        this.speed = speed;\n    }\n    awake() {\n        this.input = this.getService(Enum_1.ServiceNameSpaces.InputService);\n        this.positionComp = this.getComponent(Enum_1.ComponentNameSpace.Position2DComponents);\n        this.timer = this.getService(Enum_1.ServiceNameSpaces.Timer);\n    }\n    update() {\n        // console.log(this.input.isKeyDown(KeyBoard.DOWN));\n        // console.log(this.input.isKeyDown(KeyBoard.UP));\n        // console.log(this.input.isKeyDown(KeyBoard.RIGHT));\n        // console.log(this.input.isKeyDown(KeyBoard.LEFT));\n        if (this.input.isKeyDown(InputServiceInterface_1.KeyBoard.a) || this.input.isKeyDown(InputServiceInterface_1.KeyBoard.A)) {\n            this.positionComp.X -= this.timer.DealTime * this.speed;\n        }\n        else if (this.input.isKeyDown(InputServiceInterface_1.KeyBoard.d) || this.input.isKeyDown(InputServiceInterface_1.KeyBoard.D)) {\n            this.positionComp.X += this.timer.DealTime * this.speed;\n        }\n        else if (this.input.isKeyDown(InputServiceInterface_1.KeyBoard.W) || this.input.isKeyDown(InputServiceInterface_1.KeyBoard.w)) {\n            this.positionComp.Y -= this.timer.DealTime * this.speed;\n        }\n        else if (this.input.isKeyDown(InputServiceInterface_1.KeyBoard.s) || this.input.isKeyDown(InputServiceInterface_1.KeyBoard.S)) {\n            this.positionComp.Y += this.timer.DealTime * this.speed;\n        }\n    }\n}\nexports.default = MoveComponent;\n\n\n//# sourceURL=webpack:///./src/core/components/implements/MoveComponent.ts?");

/***/ }),

/***/ "./src/core/components/implements/Position2DComponents.ts":
/*!****************************************************************!*\
  !*** ./src/core/components/implements/Position2DComponents.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstarctComponent_1 = __webpack_require__(/*! ./AbstarctComponent */ \"./src/core/components/implements/AbstarctComponent.ts\");\nconst Enum_1 = __webpack_require__(/*! ../../../util/data/Enum */ \"./src/util/data/Enum.ts\");\nclass Position2DComponents extends AbstarctComponent_1.default {\n    constructor() {\n        super();\n        this.x = 0;\n        this.y = 0;\n        this.rotation = 0;\n        this.oldX = 0;\n        this.oldY = 0;\n        this.oldRotation = 0;\n        this.isDirty = true;\n        this.nameSpace = Enum_1.ComponentNameSpace.Position2DComponents;\n    }\n    get X() {\n        return this.x;\n    }\n    get Y() {\n        return this.y;\n    }\n    get IsDirty() {\n        return this.isDirty;\n    }\n    set X(x) {\n        if (x !== this.x) {\n            this.oldX = this.x;\n            this.x = x;\n            this.isDirty = true;\n        }\n    }\n    set Y(y) {\n        if (y !== this.y) {\n            this.oldY = this.y;\n            this.y = y;\n            this.isDirty = true;\n        }\n    }\n    set Rotation(rotation) {\n        if (rotation !== this.rotation) {\n            this.oldRotation = this.rotation;\n            this.rotation = rotation;\n            this.isDirty = true;\n        }\n    }\n    get OldX() {\n        return this.oldX;\n    }\n    get OldY() {\n        return this.oldY;\n    }\n    get Rotation() {\n        return this.rotation;\n    }\n    get OldRotation() {\n        return this.oldRotation;\n    }\n    afterUpdated() {\n        this.isDirty = false;\n    }\n}\nexports.default = Position2DComponents;\n\n\n//# sourceURL=webpack:///./src/core/components/implements/Position2DComponents.ts?");

/***/ }),

/***/ "./src/core/components/implements/Render2DComponent.ts":
/*!*************************************************************!*\
  !*** ./src/core/components/implements/Render2DComponent.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstarctComponent_1 = __webpack_require__(/*! ./AbstarctComponent */ \"./src/core/components/implements/AbstarctComponent.ts\");\nconst Enum_1 = __webpack_require__(/*! ../../../util/data/Enum */ \"./src/util/data/Enum.ts\");\nclass Render2DComponent extends AbstarctComponent_1.default {\n    constructor(image) {\n        super();\n        this.isDirty = true;\n        this.nameSpace = Enum_1.ComponentNameSpace.Render2DComponent;\n        this.canvas = document.createElement('canvas');\n        this.imageResource = image;\n    }\n    get ImageResource() {\n        return this.imageResource;\n    }\n    set ImageResource(imageResource) {\n        this.imageResource = imageResource;\n        this.isDirty = true;\n    }\n    awake() {\n        // this.renderService =  this.getService(ServiceNameSpaces.Render2DService);\n        this.positionComp = this.getComponent(Enum_1.ComponentNameSpace.Position2DComponents);\n        const context = this.canvas.getContext('2d');\n        context.drawImage(this.imageResource, 0, 0);\n    }\n    start() {\n        // this.renderService.render(this.canvas, this.positionComp.X, this.positionComp.Y);\n    }\n    ;\n    render() {\n        if (this.positionComp.IsDirty || this.isDirty) {\n            this.publishEvent(Enum_1.ComponentEvents.Render, this.canvas, this.positionComp.X, this.positionComp.Y);\n            this.isDirty = false;\n        }\n        ;\n    }\n    ;\n    destroy() {\n        console.log('destroy...');\n    }\n    destroyed() {\n        console.log('destroyed...');\n    }\n}\nexports.default = Render2DComponent;\nclass RectCanvas {\n    constructor(width, height, color) {\n        this.canvas = document.createElement('canvas');\n        this.canvas.width = width;\n        this.canvas.height = height;\n        this.fillColor(this.canvas, color);\n    }\n    fillColor(canvas, color) {\n        const context = canvas.getContext('2d');\n        context.fillStyle = color;\n        context.fillRect(0, 0, canvas.width, canvas.height);\n    }\n    get Canvas() {\n        return this.canvas;\n    }\n}\nexports.RectCanvas = RectCanvas;\n\n\n//# sourceURL=webpack:///./src/core/components/implements/Render2DComponent.ts?");

/***/ }),

/***/ "./src/core/gameObject/implement/Camera2D.ts":
/*!***************************************************!*\
  !*** ./src/core/gameObject/implement/Camera2D.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst GameObject_1 = __webpack_require__(/*! ./GameObject */ \"./src/core/gameObject/implement/GameObject.ts\");\nconst Position2DComponents_1 = __webpack_require__(/*! ../../components/implements/Position2DComponents */ \"./src/core/components/implements/Position2DComponents.ts\");\nconst Camera2DComponent_1 = __webpack_require__(/*! ../../components/implements/Camera2DComponent */ \"./src/core/components/implements/Camera2DComponent.ts\");\nclass Camera2D extends GameObject_1.default {\n    constructor() {\n        super();\n        this.addComponent(new Position2DComponents_1.default());\n        this.addComponent(new Camera2DComponent_1.default());\n    }\n}\nexports.default = Camera2D;\n\n\n//# sourceURL=webpack:///./src/core/gameObject/implement/Camera2D.ts?");

/***/ }),

/***/ "./src/core/gameObject/implement/GameObject.ts":
/*!*****************************************************!*\
  !*** ./src/core/gameObject/implement/GameObject.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst GEObject_1 = __webpack_require__(/*! ../../cntroller/implements/GEObject */ \"./src/core/cntroller/implements/GEObject.ts\");\nconst GE_1 = __webpack_require__(/*! ../../cntroller/implements/GE */ \"./src/core/cntroller/implements/GE.ts\");\nconst MutiValueMap_1 = __webpack_require__(/*! ../../../util/map/MutiValueMap */ \"./src/util/map/MutiValueMap.ts\");\nconst Enum_1 = __webpack_require__(/*! ../../../util/data/Enum */ \"./src/util/data/Enum.ts\");\nclass GameObject extends GEObject_1.default {\n    constructor() {\n        super(...arguments);\n        this.componentMap = new MutiValueMap_1.default();\n        // public getService<T extends AbstractServiceInterface>(serviceClass: typeof AbstractService): T {\n        //     return GE.getService(serviceClass) as T;\n        // };\n    }\n    addComponent(component) {\n        component.gameObject = this;\n        component.Services = GE_1.default.getServiceMap();\n        // console.log('GE.getServiceMap()： ', GE.getServiceMap());\n        this.componentMap.add(component.NameSpace, component);\n        GE_1.default.addComponent(this, component);\n        GE_1.default.publishComponentEvent(Enum_1.ComponentEvents.AddComponent, component);\n        return component;\n    }\n    ;\n    removeComponent(component) {\n        GE_1.default.publishComponentEvent(Enum_1.ComponentEvents.RemoveComponent, component);\n        GE_1.default.removeComponent(this, component);\n        if (!component.getAllComponents().length) {\n            component.gameObject = null;\n        }\n        this.componentMap.removeValue(component.constructorFunction, component);\n    }\n    ;\n    getComponents(componentType) {\n        return this.componentMap.get(componentType);\n    }\n    ;\n    getComponent(componentType) {\n        return this.componentMap.get(componentType).get(0);\n    }\n    ;\n    getAllComponents() {\n        return this.componentMap.values();\n    }\n}\nexports.default = GameObject;\n\n\n//# sourceURL=webpack:///./src/core/gameObject/implement/GameObject.ts?");

/***/ }),

/***/ "./src/core/gameObject/implement/TestGameObject.ts":
/*!*********************************************************!*\
  !*** ./src/core/gameObject/implement/TestGameObject.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst GameObject_1 = __webpack_require__(/*! ./GameObject */ \"./src/core/gameObject/implement/GameObject.ts\");\nconst Position2DComponents_1 = __webpack_require__(/*! ../../components/implements/Position2DComponents */ \"./src/core/components/implements/Position2DComponents.ts\");\nconst Render2DComponent_1 = __webpack_require__(/*! ../../components/implements/Render2DComponent */ \"./src/core/components/implements/Render2DComponent.ts\");\nconst MoveComponent_1 = __webpack_require__(/*! ../../components/implements/MoveComponent */ \"./src/core/components/implements/MoveComponent.ts\");\nclass TestGameObject extends GameObject_1.default {\n    constructor() {\n        super();\n        // const test = this.addComponent(new TestComponents());\n        this.addComponent(new Position2DComponents_1.default());\n        this.addComponent(new Render2DComponent_1.default(new Render2DComponent_1.RectCanvas(100, 100, '#808080').Canvas));\n        this.addComponent(new MoveComponent_1.default()).Speed = 300;\n    }\n}\nexports.default = TestGameObject;\n\n\n//# sourceURL=webpack:///./src/core/gameObject/implement/TestGameObject.ts?");

/***/ }),

/***/ "./src/core/services/implement/AbstractService.ts":
/*!********************************************************!*\
  !*** ./src/core/services/implement/AbstractService.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst GEObject_1 = __webpack_require__(/*! ../../cntroller/implements/GEObject */ \"./src/core/cntroller/implements/GEObject.ts\");\nconst GE_1 = __webpack_require__(/*! ../../cntroller/implements/GE */ \"./src/core/cntroller/implements/GE.ts\");\nclass AbstractService extends GEObject_1.default {\n    getService(serviceNameSpace) {\n        return GE_1.default.getServiceMap().get(serviceNameSpace);\n    }\n}\nexports.default = AbstractService;\n\n\n//# sourceURL=webpack:///./src/core/services/implement/AbstractService.ts?");

/***/ }),

/***/ "./src/core/services/implement/Camera2DService.ts":
/*!********************************************************!*\
  !*** ./src/core/services/implement/Camera2DService.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstractService_1 = __webpack_require__(/*! ./AbstractService */ \"./src/core/services/implement/AbstractService.ts\");\nconst ArraySet_1 = __webpack_require__(/*! ../../../util/ArraySet */ \"./src/util/ArraySet.ts\");\nconst GE_1 = __webpack_require__(/*! ../../cntroller/implements/GE */ \"./src/core/cntroller/implements/GE.ts\");\nconst Enum_1 = __webpack_require__(/*! ../../../util/data/Enum */ \"./src/util/data/Enum.ts\");\n/**\n * 离线渲染.\n */\nclass Camera2DService extends AbstractService_1.default {\n    constructor() {\n        super();\n        this.cameraArray = new ArraySet_1.default();\n        GE_1.default.subscribeComponentEvent(Enum_1.ComponentEvents.Render, this.render.bind(this));\n        GE_1.default.subscribeComponentEvent(Enum_1.ComponentEvents.AddComponent, this.addCamera.bind(this));\n    }\n    get MainCamera() {\n        return this.mainCamera;\n    }\n    ;\n    /**\n     * 将物体渲染在各个Camera的canvas,当前只处理mainCamera.\n     * @param canvas 需要被渲染的物体.\n     * @param x\n     * @param y\n     */\n    render(canvas, x, y) {\n        const cameraArray = this.cameraArray.valus();\n        for (let i = 0; i < cameraArray.length; i++) {\n            const camera = cameraArray[i];\n            camera.render(canvas, x, y);\n        }\n    }\n    ;\n    addCamera(camera) {\n        if (camera.NameSpace === Enum_1.ComponentNameSpace.Camera2DComponent) {\n            if (!this.mainCamera) {\n                this.setMainCamera(camera);\n            }\n            else {\n                this.cameraArray.add(camera);\n            }\n        }\n    }\n    ;\n    setMainCamera(camera) {\n        this.mainCamera = camera;\n        this.cameraArray.add(camera);\n    }\n    ;\n    removeCamera(camera) {\n        this.cameraArray.remove(camera);\n        if (this.mainCamera === camera) {\n            this.mainCamera = this.cameraArray.get(0);\n        }\n    }\n    ;\n}\nexports.default = Camera2DService;\n\n\n//# sourceURL=webpack:///./src/core/services/implement/Camera2DService.ts?");

/***/ }),

/***/ "./src/core/services/implement/CollisionService.ts":
/*!*********************************************************!*\
  !*** ./src/core/services/implement/CollisionService.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstractService_1 = __webpack_require__(/*! ./AbstractService */ \"./src/core/services/implement/AbstractService.ts\");\nconst CollisionServiceInterface_1 = __webpack_require__(/*! ../interface/CollisionServiceInterface */ \"./src/core/services/interface/CollisionServiceInterface.ts\");\nconst GE_1 = __webpack_require__(/*! ../../cntroller/implements/GE */ \"./src/core/cntroller/implements/GE.ts\");\nconst Map_1 = __webpack_require__(/*! ../../../util/map/Map */ \"./src/util/map/Map.ts\");\nconst MutiValueMap_1 = __webpack_require__(/*! ../../../util/map/MutiValueMap */ \"./src/util/map/MutiValueMap.ts\");\nconst Enum_1 = __webpack_require__(/*! ../../../util/data/Enum */ \"./src/util/data/Enum.ts\");\nclass CollisionService extends AbstractService_1.default {\n    constructor() {\n        super();\n        this.objectToComponentsMap = new MutiValueMap_1.default();\n        this.impackTaskMap = new Map_1.default();\n        //描述两个Object是否相撞.\n        this.isObjectHittingRecord = new Map_1.default();\n        this.registImpactTask = (component) => {\n            if (component.OnHit || component.OnLeave) {\n                const gameObject = component.gameObject;\n                const impackTask = new CollisionServiceInterface_1.ImpackTask(component.onHit, component.onLeave);\n                this.objectToComponentsMap.add(gameObject.Id, component.Id);\n                this.impackTaskMap.set(component.Id, impackTask);\n            }\n        };\n        this.unRegistImpactTask = (component) => {\n            const gameObject = component.gameObject;\n            this.objectToComponentsMap.removeValue(gameObject.Id, component.Id);\n            this.impackTaskMap.delete(component.Id);\n        };\n        GE_1.default.subscribeComponentEvent(Enum_1.ComponentEvents.AddComponent, this.registImpactTask);\n        GE_1.default.subscribeComponentEvent(Enum_1.ComponentEvents.RemoveComponent, this.unRegistImpactTask);\n        //TODO object Destory 监听.\n    }\n    //TODO 记录gamgeObjectId与位置信息.\n    updateCollisionInfo(collision, motionInfo) {\n        collision.gameObject.Id;\n        collision.CollisionType;\n        collision.OffsetX;\n        collision.OffsetY;\n        motionInfo.Position;\n        motionInfo.OldPosition;\n        new CollisionServiceInterface_1.ImpactInstanceInfo(collision.gameObject.Id, motionInfo.Position);\n    }\n    ;\n    //TODO 碰撞计算。\n    update() {\n    }\n    //TODO 在碰撞结果计算完成后调用该函数.\n    runOnHitTaskArray(impackInfoArray) {\n        const curImpacRecord = new Map_1.default();\n        for (let i = 0; i < impackInfoArray.length; i++) {\n            const impackInfo = impackInfoArray[i];\n            const key = this.combineId(impackInfo.Other.GameObjectId, impackInfo.Self.GameObjectId);\n            curImpacRecord.set(key, true);\n            if (!this.isObjectHittingRecord.get(key)) {\n                this.runOnHitTask(impackInfo);\n                this.isObjectHittingRecord.set(key, impackInfo);\n            }\n        }\n        const lastHitedIdArray = this.isObjectHittingRecord.keys();\n        for (let i = 0; i < lastHitedIdArray.length; i++) {\n            const key = lastHitedIdArray[i];\n            if (!curImpacRecord.get(key)) {\n                this.runOnLeaveTask(this.isObjectHittingRecord.get(key));\n                this.isObjectHittingRecord.delete(key);\n            }\n        }\n    }\n    combineId(id1, id2) {\n        if (id1 > id2) {\n            return `${id2}_${id1}`;\n        }\n        else {\n            return `${id1}_${id2}`;\n        }\n    }\n    runOnHitTask(impackInfo) {\n        const objSelfTasks = [...this.getHitTasks(impackInfo.Self.GameObjectId)];\n        for (let i = 0; i < objSelfTasks.length; i++) {\n            try {\n                objSelfTasks[i](impackInfo.Other);\n            }\n            catch (e) {\n                console.error(e);\n            }\n        }\n        const objOtherTasks = [...this.getHitTasks(impackInfo.Other.GameObjectId)];\n        for (let i = 0; i < objOtherTasks.length; i++) {\n            try {\n                objOtherTasks[i](impackInfo.Self);\n            }\n            catch (e) {\n                console.error(e);\n            }\n        }\n    }\n    ;\n    runOnLeaveTask(impactInfo) {\n        const objSelfTasks = [...this.getLeaveTasks(impactInfo.Self.GameObjectId)];\n        for (let i = 0; i < objSelfTasks.length; i++) {\n            try {\n                objSelfTasks[i](impactInfo.Other);\n            }\n            catch (e) {\n                console.error(e);\n            }\n        }\n        const objOtherTasks = [...this.getLeaveTasks(impactInfo.Other.GameObjectId)];\n        for (let i = 0; i < objOtherTasks.length; i++) {\n            try {\n                objOtherTasks[i](impactInfo.Self);\n            }\n            catch (e) {\n                console.error(e);\n            }\n        }\n    }\n    ;\n    getImpackArry(gameObjectId) {\n        return this.objectToComponentsMap.get(gameObjectId).map(componentIds => this.impackTaskMap.get(componentIds));\n    }\n    getHitTasks(gameObjectId) {\n        const tasksArray = new Array();\n        const impackArry = this.getImpackArry(gameObjectId);\n        for (let i = 0; i < impackArry.length; i++) {\n            const impack = impackArry[i];\n            if (impack && impack.OnHit) {\n                tasksArray.push(impack.OnHit);\n            }\n        }\n        return tasksArray;\n    }\n    ;\n    getLeaveTasks(gameObjectId) {\n        const tasksArray = new Array();\n        const impackArry = this.getImpackArry(gameObjectId);\n        for (let i = 0; i < impackArry.length; i++) {\n            const impack = impackArry[i];\n            if (impack && impack.OnLeave) {\n                tasksArray.push(impack.OnLeave);\n            }\n        }\n        return tasksArray;\n    }\n    ;\n}\nexports.CollisionService = CollisionService;\n\n\n//# sourceURL=webpack:///./src/core/services/implement/CollisionService.ts?");

/***/ }),

/***/ "./src/core/services/implement/InputService.ts":
/*!*****************************************************!*\
  !*** ./src/core/services/implement/InputService.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstractService_1 = __webpack_require__(/*! ./AbstractService */ \"./src/core/services/implement/AbstractService.ts\");\nclass InputService extends AbstractService_1.default {\n    constructor() {\n        super();\n        this.isKeysDown = {};\n        this.hasKeysDown = {};\n        this.hasKeysUp = {};\n        window.addEventListener('keydown', event => {\n            this.isKeysDown[event.key] = true;\n            this.hasKeysDown[event.key] = true;\n            this.hasKeysUp[event.key] = false;\n        });\n        window.addEventListener('keyup', event => {\n            this.isKeysDown[event.key] = false;\n            this.hasKeysDown[event.key] = false;\n            this.hasKeysUp[event.key] = true;\n        });\n    }\n    ;\n    updated() {\n        const downKeys = Object.keys(this.hasKeysDown);\n        for (let i = 0; i < downKeys.length; i++) {\n            this.hasKeysDown[downKeys[i]] = false;\n        }\n        const upKeys = Object.keys(this.hasKeysUp);\n        for (let i = 0; i < upKeys.length; i++) {\n            this.hasKeysUp[upKeys[i]] = false;\n        }\n    }\n    keyDown(keyBoard) {\n        return this.hasKeysDown[keyBoard];\n    }\n    keyUp(keyBoard) {\n        return this.hasKeysUp[keyBoard];\n    }\n    isKeyDown(keyBoard) {\n        return this.isKeysDown[keyBoard];\n    }\n    ;\n    isKeyUp(keyBoard) {\n        return !this.isKeysDown[keyBoard];\n    }\n    ;\n    onKeyDown(keyBoard, fun) {\n        fun();\n    }\n    ;\n    onKeyUp(keyBoard, fun) {\n        fun();\n    }\n    ;\n}\nexports.default = InputService;\n\n\n//# sourceURL=webpack:///./src/core/services/implement/InputService.ts?");

/***/ }),

/***/ "./src/core/services/implement/Render2DService.ts":
/*!********************************************************!*\
  !*** ./src/core/services/implement/Render2DService.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstractService_1 = __webpack_require__(/*! ./AbstractService */ \"./src/core/services/implement/AbstractService.ts\");\nconst Enum_1 = __webpack_require__(/*! ../../../util/data/Enum */ \"./src/util/data/Enum.ts\");\nclass Render2DService extends AbstractService_1.default {\n    constructor() {\n        super();\n        this.isDirty = true;\n    }\n    init() {\n        this.cameraService = this.getService(Enum_1.ServiceNameSpaces.Camera2D);\n        this.initCanvas();\n    }\n    ;\n    initCanvas() {\n        document.body.style.margin = '0 0';\n        const mainCanvas = this.getCanvas();\n        if (!this.maiCanvas) {\n            this.maiCanvas = mainCanvas.canavs;\n            this.mainContext = mainCanvas.context;\n            this.maiCanvas.style.background = 'black';\n            document.body.appendChild(this.maiCanvas);\n            const tempCanvas = this.getCanvas();\n            this.tempContext = tempCanvas.context;\n            this.tempCanvas = tempCanvas.canavs;\n        }\n    }\n    ;\n    getCanvas() {\n        const canavs = document.createElement('canvas');\n        canavs.width = this.cameraService.MainCamera.Width;\n        canavs.height = this.cameraService.MainCamera.Height;\n        return {\n            canavs,\n            context: canavs.getContext('2d'),\n        };\n    }\n    //TODO\n    render(canvas, x, y) {\n        // const cameraPosition = this.mainCamera.getPosition()\n        // this.tempContext.drawImage(canvas, x - cameraPosition.X, y - cameraPosition.Y, canvas.width, canvas.height);\n        this.isDirty = true;\n    }\n    ;\n    update() {\n        const mainCamera = this.cameraService.MainCamera;\n        if (mainCamera.IsDirty) {\n            const screenPosition = mainCamera.getScreenPosition();\n            const mainCanvas = mainCamera.Canvas;\n            this.mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);\n            this.mainContext.drawImage(mainCanvas, screenPosition.X, screenPosition.Y, mainCanvas.width, mainCanvas.height);\n            mainCamera.clear();\n        }\n        // if(this.isDirty){\n        //     this.mainContext.clearRect(0, 0, this.maiCanvas.width, this.maiCanvas.height);\n        //     this.mainContext.drawImage(this.tempCanvas, 0, 0, this.tempCanvas.width, this.tempCanvas.height);\n        //     this.tempContext.clearRect(0,0, this.tempCanvas.width, this.tempCanvas.height);\n        //     this.isDirty = false;\n        // }\n    }\n    ;\n}\nexports.default = Render2DService;\n\n\n//# sourceURL=webpack:///./src/core/services/implement/Render2DService.ts?");

/***/ }),

/***/ "./src/core/services/implement/ResourceLoader.ts":
/*!*******************************************************!*\
  !*** ./src/core/services/implement/ResourceLoader.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstractService_1 = __webpack_require__(/*! ./AbstractService */ \"./src/core/services/implement/AbstractService.ts\");\nconst ResourceLoader_1 = __webpack_require__(/*! ../interface/ResourceLoader */ \"./src/core/services/interface/ResourceLoader.ts\");\nconst Map_1 = __webpack_require__(/*! ../../../util/map/Map */ \"./src/util/map/Map.ts\");\nclass ResourceLoader extends AbstractService_1.default {\n    constructor() {\n        super();\n        this.loadingNumber = 0;\n        this.loadedNumber = 0;\n        this.allCompleteTasks = new Array();\n        this.loadedSourceMap = new Map_1.default();\n        this.initMethodMap();\n    }\n    get LoadedNumber() {\n        return this.loadedNumber;\n    }\n    get LoaingNumber() {\n        return this.loadingNumber;\n    }\n    getFullUrl(url) {\n        const templink = document.createElement('link');\n        templink.href = 'url';\n        return templink.href;\n    }\n    initMethodMap() {\n        this.methodMap = new Map_1.default();\n        this.methodMap.set(ResourceLoader_1.ResourceType.IMAGE, this.loadImage);\n    }\n    ;\n    loadResource(resource) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const loadedSource = this.loadedSourceMap.get(this.getFullUrl(resource.Url));\n            if (loadedSource) {\n                resource.Content = loadedSource.Content;\n                return;\n            }\n            this.loadingNumber++;\n            yield this.methodMap.get(resource.Type)(resource);\n            this.loadedNumber++;\n            this.loadedSourceMap.set(this.getFullUrl(resource.Url), resource);\n            if (this.loadingNumber === this.loadedNumber) {\n                this.flushCompleteTasks();\n            }\n        });\n    }\n    ;\n    loadImage(resource) {\n        const image = new Image();\n        const permise = new Promise((resolve, reject) => {\n            image.addEventListener('load', () => {\n                resource.Content = image;\n                resolve();\n            });\n            image.addEventListener('error', event => {\n                console.error(event);\n                reject();\n            });\n        });\n        image.src = resource.Url;\n        return permise;\n    }\n    ;\n    onLoaded(fun) {\n        if (this.loadedNumber === this.loadingNumber) {\n            fun();\n        }\n        else {\n            this.allCompleteTasks.push(fun);\n        }\n    }\n    ;\n    isloading() {\n        return this.loadedNumber === this.loadedNumber;\n    }\n    flushCompleteTasks() {\n        for (let i = 0; i < this.allCompleteTasks.length; i++) {\n            this.allCompleteTasks[i]();\n        }\n        this.allCompleteTasks = [];\n    }\n    ;\n}\nexports.ResourceLoader = ResourceLoader;\n\n\n//# sourceURL=webpack:///./src/core/services/implement/ResourceLoader.ts?");

/***/ }),

/***/ "./src/core/services/implement/Timer.ts":
/*!**********************************************!*\
  !*** ./src/core/services/implement/Timer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst AbstractService_1 = __webpack_require__(/*! ./AbstractService */ \"./src/core/services/implement/AbstractService.ts\");\nclass Timer extends AbstractService_1.default {\n    constructor() {\n        super();\n        //单位秒(s).\n        this.dealTime = 0;\n        //单位秒(s).\n        this.startFromeNow = 0;\n        this.startTime = 0;\n        //时间的缩放 单位 ms=> s, ( 0 ~ 1 ) * 0.001;\n        this.sacle = 1 * 0.001;\n    }\n    get DealTime() {\n        return this.dealTime;\n    }\n    ;\n    get StartFromeNow() {\n        return this.startFromeNow;\n    }\n    ;\n    get Scale() {\n        return this.sacle * 1000;\n    }\n    set Scale(scale) {\n        if (scale > 1) {\n            this.sacle = 0.001;\n        }\n        else if (scale < 0) {\n            this.sacle = 0;\n        }\n        else {\n            this.sacle = scale * 0.001;\n        }\n    }\n    init() {\n        this.startTime = Date.now();\n    }\n    ;\n    willUpdate() {\n        const newStartFromeNow = (Date.now() - this.startTime) * this.sacle;\n        this.dealTime = (newStartFromeNow - this.startFromeNow);\n        this.startFromeNow = newStartFromeNow;\n    }\n    ;\n}\nexports.default = Timer;\n\n\n//# sourceURL=webpack:///./src/core/services/implement/Timer.ts?");

/***/ }),

/***/ "./src/core/services/interface/CollisionServiceInterface.ts":
/*!******************************************************************!*\
  !*** ./src/core/services/interface/CollisionServiceInterface.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass ImpactInstanceInfo {\n    constructor(gameObjectId, position) {\n        this.gameObjectId = gameObjectId;\n        this.position = position;\n    }\n    get GameObjectId() {\n        return this.gameObjectId;\n    }\n    ;\n    get Position() {\n        return this.position;\n    }\n    ;\n}\nexports.ImpactInstanceInfo = ImpactInstanceInfo;\nclass MotionInfo {\n    constructor(position, oldPosition) {\n        this.position = position;\n        this.oldPosition = oldPosition;\n    }\n    get Position() {\n        return this.position;\n    }\n    get OldPosition() {\n        return this.oldPosition;\n    }\n}\nexports.MotionInfo = MotionInfo;\nclass ImpactInfo {\n    constructor(self, other) {\n        this.self = self;\n        this.other = other;\n    }\n    get Self() {\n        return this.self;\n    }\n    get Other() {\n        return this.other;\n    }\n}\nexports.ImpactInfo = ImpactInfo;\n;\nclass ImpackTask {\n    constructor(onHit, onLeave) {\n        this.onHit = onHit;\n        this.onLeave = onLeave;\n    }\n    get OnHit() {\n        return this.onHit;\n    }\n    get OnLeave() {\n        return this.onLeave;\n    }\n}\nexports.ImpackTask = ImpackTask;\n;\n\n\n//# sourceURL=webpack:///./src/core/services/interface/CollisionServiceInterface.ts?");

/***/ }),

/***/ "./src/core/services/interface/InputServiceInterface.ts":
/*!**************************************************************!*\
  !*** ./src/core/services/interface/InputServiceInterface.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar KeyBoard;\n(function (KeyBoard) {\n    KeyBoard[\"A\"] = \"A\";\n    KeyBoard[\"B\"] = \"B\";\n    KeyBoard[\"C\"] = \"C\";\n    KeyBoard[\"D\"] = \"D\";\n    KeyBoard[\"F\"] = \"F\";\n    KeyBoard[\"Q\"] = \"Q\";\n    KeyBoard[\"W\"] = \"W\";\n    KeyBoard[\"E\"] = \"E\";\n    KeyBoard[\"R\"] = \"R\";\n    KeyBoard[\"T\"] = \"T\";\n    KeyBoard[\"Y\"] = \"Y\";\n    KeyBoard[\"U\"] = \"U\";\n    KeyBoard[\"I\"] = \"I\";\n    KeyBoard[\"O\"] = \"O\";\n    KeyBoard[\"P\"] = \"P\";\n    KeyBoard[\"S\"] = \"S\";\n    KeyBoard[\"G\"] = \"G\";\n    KeyBoard[\"H\"] = \"G\";\n    KeyBoard[\"J\"] = \"J\";\n    KeyBoard[\"K\"] = \"K\";\n    KeyBoard[\"L\"] = \"L\";\n    KeyBoard[\"Z\"] = \"Z\";\n    KeyBoard[\"X\"] = \"X\";\n    KeyBoard[\"V\"] = \"V\";\n    KeyBoard[\"N\"] = \"N\";\n    KeyBoard[\"M\"] = \"M\";\n    KeyBoard[\"q\"] = \"q\";\n    KeyBoard[\"w\"] = \"w\";\n    KeyBoard[\"e\"] = \"e\";\n    KeyBoard[\"r\"] = \"r\";\n    KeyBoard[\"t\"] = \"t\";\n    KeyBoard[\"y\"] = \"y\";\n    KeyBoard[\"u\"] = \"u\";\n    KeyBoard[\"i\"] = \"i\";\n    KeyBoard[\"o\"] = \"o\";\n    KeyBoard[\"p\"] = \"p\";\n    KeyBoard[\"a\"] = \"a\";\n    KeyBoard[\"s\"] = \"s\";\n    KeyBoard[\"d\"] = \"d\";\n    KeyBoard[\"f\"] = \"f\";\n    KeyBoard[\"g\"] = \"g\";\n    KeyBoard[\"h\"] = \"h\";\n    KeyBoard[\"j\"] = \"j\";\n    KeyBoard[\"k\"] = \"k\";\n    KeyBoard[\"l\"] = \"l\";\n    KeyBoard[\"z\"] = \"z\";\n    KeyBoard[\"x\"] = \"x\";\n    KeyBoard[\"c\"] = \"c\";\n    KeyBoard[\"v\"] = \"v\";\n    KeyBoard[\"b\"] = \"b\";\n    KeyBoard[\"n\"] = \"n\";\n    KeyBoard[\"m\"] = \"m\";\n    KeyBoard[\"SHIFT\"] = \"Shift\";\n    KeyBoard[\"LEFT\"] = \"ArrowLeft\";\n    KeyBoard[\"RIGHT\"] = \"ArrowRight\";\n    KeyBoard[\"UP\"] = \"ArrowUp\";\n    KeyBoard[\"DOWN\"] = \"ArrowDown\";\n})(KeyBoard = exports.KeyBoard || (exports.KeyBoard = {}));\n\n\n//# sourceURL=webpack:///./src/core/services/interface/InputServiceInterface.ts?");

/***/ }),

/***/ "./src/core/services/interface/ResourceLoader.ts":
/*!*******************************************************!*\
  !*** ./src/core/services/interface/ResourceLoader.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ResourceType;\n(function (ResourceType) {\n    ResourceType[ResourceType[\"AUDIO\"] = 1] = \"AUDIO\";\n    ResourceType[ResourceType[\"IMAGE\"] = 2] = \"IMAGE\";\n    ResourceType[ResourceType[\"VIDEO\"] = 3] = \"VIDEO\";\n})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));\nclass Resource {\n    constructor(url, type) {\n        this.url = url;\n        this.type = type;\n    }\n    get Url() {\n        return this.url;\n    }\n    get Type() {\n        return this.type;\n    }\n    get Content() {\n        return this.content;\n    }\n    set Content(content) {\n        this.content = content;\n    }\n}\nexports.Resource = Resource;\n\n\n//# sourceURL=webpack:///./src/core/services/interface/ResourceLoader.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst GE_1 = __webpack_require__(/*! ./core/cntroller/implements/GE */ \"./src/core/cntroller/implements/GE.ts\");\nconst TestGameObject_1 = __webpack_require__(/*! ./core/gameObject/implement/TestGameObject */ \"./src/core/gameObject/implement/TestGameObject.ts\");\nconst Camera2D_1 = __webpack_require__(/*! ./core/gameObject/implement/Camera2D */ \"./src/core/gameObject/implement/Camera2D.ts\");\n// setTimeout(() => {\n//     GE.pause();\n// }, 500);\n// setTimeout(() => {\n//     GE.start();\n// }, 1000);\n// setTimeout(() => {\n//     GE.pause();\n// }, 5500);\nGE_1.default.init();\nnew Camera2D_1.default();\nGE_1.default.start();\nconst testGameObject = new TestGameObject_1.default();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/util/ArraySet.ts":
/*!******************************!*\
  !*** ./src/util/ArraySet.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass ArraySet {\n    constructor() {\n        this.array = new Array();\n    }\n    add(value) {\n        let index = this.array.indexOf(value);\n        if (index === -1) {\n            this.array.push(value);\n        }\n        return index;\n    }\n    ;\n    contains(value) {\n        return this.array.indexOf(value) > -1;\n    }\n    ;\n    get(index) {\n        return this.array[index];\n    }\n    ;\n    concat(arraySet) {\n        arraySet.map(item => {\n            this.add(item);\n        });\n    }\n    ;\n    map(fun) {\n        const array = [...this.array];\n        return array.map((item, index) => {\n            return fun(item, index);\n        });\n    }\n    ;\n    remove(value) {\n        const index = this.array.indexOf(value);\n        if (-1 !== index) {\n            this.array.splice(index, 1);\n        }\n    }\n    ;\n    valus() {\n        return [...this.array];\n    }\n}\nexports.default = ArraySet;\n\n\n//# sourceURL=webpack:///./src/util/ArraySet.ts?");

/***/ }),

/***/ "./src/util/data/Enum.ts":
/*!*******************************!*\
  !*** ./src/util/data/Enum.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar ServiceNameSpaces;\n(function (ServiceNameSpaces) {\n    ServiceNameSpaces[ServiceNameSpaces[\"Timer\"] = 1] = \"Timer\";\n    ServiceNameSpaces[ServiceNameSpaces[\"InputService\"] = 2] = \"InputService\";\n    ServiceNameSpaces[ServiceNameSpaces[\"Render2DService\"] = 3] = \"Render2DService\";\n    ServiceNameSpaces[ServiceNameSpaces[\"ResourceLoader\"] = 4] = \"ResourceLoader\";\n    ServiceNameSpaces[ServiceNameSpaces[\"Collision\"] = 5] = \"Collision\";\n    ServiceNameSpaces[ServiceNameSpaces[\"Camera2D\"] = 6] = \"Camera2D\";\n})(ServiceNameSpaces = exports.ServiceNameSpaces || (exports.ServiceNameSpaces = {}));\nvar ComponentNameSpace;\n(function (ComponentNameSpace) {\n    ComponentNameSpace[ComponentNameSpace[\"TestComponents\"] = -1] = \"TestComponents\";\n    ComponentNameSpace[ComponentNameSpace[\"Position2DComponents\"] = 1] = \"Position2DComponents\";\n    ComponentNameSpace[ComponentNameSpace[\"Collision2DComponent\"] = 2] = \"Collision2DComponent\";\n    ComponentNameSpace[ComponentNameSpace[\"MoveComponent\"] = 3] = \"MoveComponent\";\n    ComponentNameSpace[ComponentNameSpace[\"Render2DComponent\"] = 4] = \"Render2DComponent\";\n    ComponentNameSpace[ComponentNameSpace[\"Camera2DComponent\"] = 5] = \"Camera2DComponent\";\n})(ComponentNameSpace = exports.ComponentNameSpace || (exports.ComponentNameSpace = {}));\n;\nvar ComponentEvents;\n(function (ComponentEvents) {\n    ComponentEvents[ComponentEvents[\"AddComponent\"] = 1] = \"AddComponent\";\n    ComponentEvents[ComponentEvents[\"RemoveComponent\"] = 2] = \"RemoveComponent\";\n    ComponentEvents[ComponentEvents[\"Render\"] = 3] = \"Render\";\n})(ComponentEvents = exports.ComponentEvents || (exports.ComponentEvents = {}));\n;\n\n\n//# sourceURL=webpack:///./src/util/data/Enum.ts?");

/***/ }),

/***/ "./src/util/data/Vector2D.ts":
/*!***********************************!*\
  !*** ./src/util/data/Vector2D.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Vector2D {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    get X() {\n        return this.x;\n    }\n    get Y() {\n        return this.y;\n    }\n}\nexports.default = Vector2D;\n\n\n//# sourceURL=webpack:///./src/util/data/Vector2D.ts?");

/***/ }),

/***/ "./src/util/event/EventEmitor.ts":
/*!***************************************!*\
  !*** ./src/util/event/EventEmitor.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst MutiValueMap_1 = __webpack_require__(/*! ../map/MutiValueMap */ \"./src/util/map/MutiValueMap.ts\");\nclass EventEmitor {\n    constructor() {\n        this.listeners = new MutiValueMap_1.default();\n    }\n    addEventListener(eventName, fun) {\n        this.listeners.add(eventName, fun);\n    }\n    removeEventListener(eventName, fun) {\n        this.listeners.removeValue(eventName, fun);\n    }\n    emit(eventName, ...params) {\n        const listeners = [...this.listeners.get(eventName).valus()];\n        for (let i = 0; i < listeners.length; i++) {\n            try {\n                listeners[i](...params);\n            }\n            catch (e) {\n                console.error(e);\n            }\n        }\n    }\n}\nexports.default = EventEmitor;\n\n\n//# sourceURL=webpack:///./src/util/event/EventEmitor.ts?");

/***/ }),

/***/ "./src/util/map/Map.ts":
/*!*****************************!*\
  !*** ./src/util/map/Map.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Map {\n    constructor(key, value) {\n        this.keyArray = new Array();\n        this.valueArry = new Array();\n        if (key) {\n            this.set(key, value);\n        }\n    }\n    get(key) {\n        const keyIndex = this.keyArray.indexOf(key);\n        return this.valueArry[keyIndex];\n    }\n    set(key, value) {\n        const keyIndex = this.keyArray.indexOf(key);\n        if (keyIndex > -1) {\n            this.valueArry[keyIndex] = value;\n        }\n        else {\n            this.keyArray.push(key);\n            this.valueArry.push(value);\n        }\n    }\n    delete(key) {\n        const keyIndex = this.keyArray.indexOf(key);\n        this.keyArray.splice(keyIndex, 1);\n        this.valueArry.splice(keyIndex, 1);\n        return false;\n    }\n    keys() {\n        return [...this.keyArray];\n    }\n    values() {\n        return [...this.valueArry];\n    }\n}\nexports.default = Map;\n\n\n//# sourceURL=webpack:///./src/util/map/Map.ts?");

/***/ }),

/***/ "./src/util/map/MutiValueMap.ts":
/*!**************************************!*\
  !*** ./src/util/map/MutiValueMap.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst ArraySet_1 = __webpack_require__(/*! ../ArraySet */ \"./src/util/ArraySet.ts\");\nconst Map_1 = __webpack_require__(/*! ./Map */ \"./src/util/map/Map.ts\");\nclass MutiValueMap {\n    constructor() {\n        this.map = new Map_1.default();\n    }\n    add(key, value) {\n        const arraySet = this.get(key);\n        arraySet.add(value);\n    }\n    ;\n    get(key) {\n        let resultArray = this.map.get(key);\n        if (!resultArray) {\n            resultArray = new ArraySet_1.default();\n            this.map.set(key, resultArray);\n        }\n        return resultArray;\n    }\n    ;\n    keys() {\n        return this.map.keys();\n    }\n    values() {\n        return this.map.values().reduce((resulrtArray, itemArry) => resulrtArray.concat(itemArry), []);\n    }\n    removeValues(key) {\n        this.map.delete(key);\n    }\n    ;\n    removeValue(key, value) {\n        const resultArray = this.map.get(key);\n        if (resultArray) {\n            resultArray.remove(value);\n        }\n    }\n    ;\n}\nexports.default = MutiValueMap;\n\n\n//# sourceURL=webpack:///./src/util/map/MutiValueMap.ts?");

/***/ }),

/***/ "./src/util/uuid.ts":
/*!**************************!*\
  !*** ./src/util/uuid.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Uuid {\n    static getUuid() {\n        return this.id++;\n    }\n}\nUuid.id = 0;\nexports.Uuid = Uuid;\n\n\n//# sourceURL=webpack:///./src/util/uuid.ts?");

/***/ })

/******/ });