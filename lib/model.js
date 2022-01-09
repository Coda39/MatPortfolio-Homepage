import { resolveHref } from 'next/dist/shared/lib/router/router'
import { Scene } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function LoadGLTFModel(
    scence,
    glbPath,
    options  = { receiveShadow: true, castShadow: true}
) {
    const {receiveShadow, castShadow} = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()     

        loader.load(
            glbPath, 
            gltf => {
                const obj = gltf.scence
                obj.name = 'dog'
                obj.position.y = 0 
                obj.position.x = 0 
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow 
                Scene.add(obj)

                obj.traverse(function (child ) {
                    if(child.isMesh) {
                        child.castShadow = castShadow 
                        child.receiveShadow = receiveShadow 
                    }
                })
                resolveHref(obj)
            },
            undefined, 
            function (error){ 
                reject(error) 
            }
        )
    })
}