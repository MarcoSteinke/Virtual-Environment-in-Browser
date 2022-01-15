let scene, renderer, camera, loader;
const canvas = document.querySelector("#canvas");

function init() {
    camera = new THREE.PerspectiveCamera( 45, canvas.clientWidth / canvas.clientHeight, 1, 1000 );

    renderer = new THREE.WebGLRenderer( { canvas } );

    scene = new THREE.Scene();

    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );

    loader = new THREE.TextureLoader();
	const texture = loader.load(
		"sky.jpg", 
        () => {
            scene.background = texture;
    });
}

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
requestAnimationFrame(render);

init()