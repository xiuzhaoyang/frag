attribute vec4 Position;
varying vec2 TextureCoord;

varying vec2 TextureCoordOut;

void main(void)
{
   
TextureCoordOut = gl_MultiTexCoord0.st;
    gl_Position =  ftransform();
    
}

