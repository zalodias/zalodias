varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;

vec3 palette(float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263, 0.416, 0.557);
    
    return a + b * cos(6.28318 * (c * t + d));
}

void main() {
    float scale = 8.0;
    vec2 position = vUv * (uResolution.xy/uResolution.y) * scale;
    
    for(float i = 0.0; i < 8.0; i++) {
        position.x += sin(position.y + uTime * 0.3 + i);
        mat2 rotation = mat2(1.6, -0.4, 0.8, 0.8);

        position *= rotation;
    }
    
    float turbulence = sin(position.x * 0.3) * 0.5 + 0.5;
    
    vec3 color = palette(turbulence + uTime * 0.1);
    
    gl_FragColor = vec4(color, 1.0);
}
