module.exports = function (grunt) {
    grunt.config('concat.qc', {
        src: [
            'src/license.js',
            'src/Intro.js',

            'src/core.js',
            'src/version.js',

            'src/3rd/JSZipArchive/jszip.js',
            'src/3rd/JSZipArchive/jszip-expand.js',

            'src/3rd/ZLip/zlib.js',
            'src/core/Log.js',

            'src/geom/Circle.js',
            'src/geom/Ellipse.js',
            'src/geom/Line.js',
            'src/geom/Matrix.js',
            'src/geom/Point.js',
            'src/geom/Polygon.js',
            'src/geom/Rectangle.js',
            'src/geom/RoundedRectangle.js',
            'src/geom/BezierCurve.js',
            'src/geom/GeometricTool.js',

            'src/loader/AssetUtil.js',
            'src/loader/Assets.js',
            'src/loader/Atlas.js',
            'src/loader/Texture.js',
            'src/loader/Prefab.js',
            'src/loader/Font.js',
            'src/loader/SoundAsset.js',
            'src/loader/TextAsset.js',
            'src/loader/ExcelAsset.js',
            'src/loader/ExcelSheet.js',
            'src/loader/ExcelSortSheetIndex.js',
            'src/loader/ExcelHashSheetIndex.js',
            'src/loader/PhaserLoader.js',
            'src/loader/ActionAsset.js',
            'src/loader/ActionManagerAsset.js',

            'src/math/Math.js',

            'src/plugin/NodeScheduler.js',
            'src/plugin/CleanPIXISpriteRetainer.js',

            'src/core/NodePool.js',
            'src/core/Behaviour.js',
            'src/core/Storage.js',
            'src/core/Node.js',
            'src/core/node/RectTransform.js',
            'src/core/node/NodeInput.js',
            'src/core/node/NodeSerializer.js',
            'src/core/node/NodeDisplay.js',

            'src/serializer/Serializer.js',
            'src/serializer/types/*.js',

            'src/core/Camera.js',
            'src/core/Game.js',
            'src/core/PhaserGame.js',
            'src/core/Plugin.js',
            'src/core/PluginManager.js',
            'src/core/Signal.js',
            'src/core/Stage.js',
            'src/core/State.js',
            'src/core/SceneManager.js',
            'src/core/World.js',
            'src/core/Input.js',
            'src/core/Debug.js',
            'src/core/Device.js',
            'src/core/RenderTexture.js',
            'src/core/SoftClipManager.js',
            'src/core/SoundManager.js',

            'src/core/Input/Key.js',
            'src/core/Input/Pointer.js',
            'src/core/Input/Keyboard.js',
            'src/core/Input/Mouse.js',
            'src/core/Input/Touch.js',
            'src/core/Input/InputEvent.js',
            'src/core/Input/BaseInputModule.js',

            'src/core/DirtyRectangle.js',

            'src/plugin/dragonBones.js',
            'src/plugin/dragonBonesBridge.js',

            'src/misc/Transition.js',
            'src/misc/UIState.js',
            'src/misc/Util.js',
            'src/misc/Color.js',
            'src/misc/CanvasPool.js',
            'src/misc/ApplicationCache.js',
            'src/misc/Des.js',

            'src/hack/core/*.js',
            'src/hack/system/*.js',
            'src/hack/animation/*.js',
            'src/hack/pixi/WebGLSpriteBatch.js',
            'src/hack/pixi/*.js',
            'src/hack/gameobjects/Text.js',
            'src/hack/gameobjects/*.js',
            'src/hack/tilemap/*.js',
            'src/hack/sound/*.js',
            'src/hack/loader/*.js',
            'src/hack/pixi/renderers/canvas/*.js',
            'src/hack/pixi/renderers/webgl/*.js',

            'src/gameobjects/GameObjectFactory.js',
            'src/gameobjects/UIImage.js',
            'src/gameobjects/UIRoot.js',
            'src/gameobjects/Sprite.js',
            'src/gameobjects/UIText.js',
            'src/gameobjects/Button.js',
            'src/gameobjects/Toggle.js',
            'src/gameobjects/Sound.js',
            'src/gameobjects/ScrollView.js',
            'src/gameobjects/ScrollBar.js',
            'src/gameobjects/ProgressBar.js',
            'src/gameobjects/Slider.js',
            'src/gameobjects/InputField.js',
            'src/gameobjects/Tilemap.js',
            'src/gameobjects/TileLayer.js',
            'src/gameobjects/ObjectLayer.js',
            'src/gameobjects/Dom.js',
            'src/gameobjects/Graphics.js',
            'src/gameobjects/Dropdown.js',

            'src/components/Bounds.js',
            'src/components/LayoutElement.js',
            'src/components/TableLayout.js',
            'src/components/*.js',

            'src/action/Prop.js',
            'src/action/KeyProp.js',
            'src/action/LinearProp.js',
            'src/action/CurveProp.js',
            'src/action/ActionState.js',
            'src/action/*.js',

            'src/time/Time.js',
            'src/time/Timer.js',
            'src/time/TimerEvent.js',

            'src/filter/Filter.js',
            'src/filter/FilterTexture.js',
            'src/filter/UniformHelp.js',
            'src/filter/*.js',

            'src/Outro.js'
        ],
        dest: 'build/qc-core-debug.js'
    });
};
