import Element from "./Element";

export default class SceneManager extends Element {

    /**
     * The scene manager instance as a singleton
     *
     * @type {SceneManager}
     */
    static singleton = null;

    /**
     * The currently loaded scene
     *
     * @type {Scene}
     */
    scene = null;

    static get instance() {
        if (SceneManager.singleton === null) {
            SceneManager.singleton = new SceneManager();
        }
        return SceneManager.singleton;
    }

    loadScene(scene) {
        this.scene = scene;
    }

    /**
     * Render the scene manager
     *
     * @see Element.render
     */
    render() {
        if (this.scene !== null) {
            this.scene.render();
        }
    }

    /**
     * Update the scene manager
     *
     * @see Element.update
     */
    update() {
        if (this.scene !== null) {
            this.scene.update();
        }
    }
}