let scene, renderer, camera;
const canvas = document.querySelector("#canvas");

function init() {
    const camera = new THREE.PerspectiveCamera( 45, canvas.clientWidth / canvas.clientHeight, 1, 1000 );


    const scene = new THREE.Scene();

    loader = new THREE.CubeTextureLoader();
	const texture = loader.load(
		'https://r105.threejsfundamentals.org/threejs/resources/images/daikanyama.jpg', () => {
        scene.background = texture;
    } );
    const renderer = new THREE.WebGLRenderer( { canvas } );
}

function render() {
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init()