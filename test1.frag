uniform vec3  Color1;uniform vec3  Color2;uniform vec3  AvgColor;uniform float Frequency;varying vec2  TextureCoordOut;void main() {float sawtooth = fract(TextureCoordOut.x * 16.0);
float triangle = abs(2.0 * sawtooth - 1.0);
float square = smoothstep(0.47,0.53,triangle);    gl_FragColor = vec4(square, square, square, 1.0);}