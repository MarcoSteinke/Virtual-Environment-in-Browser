let scene, renderer, camera, loader, controls, texture;
const canvas = document.querySelector("#canvas");

const views = [
    "bridge",
    "building"
]

async function init() {
    camera = new THREE.PerspectiveCamera( 50, canvas.clientWidth / canvas.clientHeight, 0.1, 2000 );
    camera.position.z = 1

    renderer = new THREE.WebGLRenderer( { canvas } );
    renderer.setSize( canvas.clientWidth, canvas.clientHeight );
    
    scene = new THREE.Scene();
    controls = new THREE.OrbitControls( camera, canvas );

    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    loader = new THREE.TextureLoader();
	texture = loader.load(
		"./rooms/bridge.jpg", 
        () => {
            const renderTarget = new THREE.WebGLCubeRenderTarget(texture.image.height)
            renderTarget.fromEquirectangularTexture(renderer, texture)
            scene.background = renderTarget.texture;
    });
}

function changeBackground(name) {
    texture = loader.load(
		`./rooms/${name}.jpg`, 
        () => {
            const renderTarget = new THREE.WebGLCubeRenderTarget(texture.image.height)
            renderTarget.fromEquirectangularTexture(renderer, texture)
            scene.background = renderTarget.texture;
    });
}

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
requestAnimationFrame(render);

init()
