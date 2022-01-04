from ursina import *
from ursina import texture
from ursina.prefabs.first_person_controller import FirstPersonController

selection = 0

#window.fps_counter.enabled = False
#window.exit_button.visible = False
class Cube(Button):
    def __init__(self, position = (0,0,0)):
        super().__init__(
            parent = scene,
            model = 'cube',
            texture = 'white_cube',
            rotation = Vec3(0,0,0),
            position = position,
            orgin_y = 0.5,
            color = color.rgb(255,255,255),
            scale = 1
        )
    def input(self, key):
        if self.hovered:
            if key == 'right mouse down':
                cube = Cube(position=self.position+mouse.normal)
            if key == 'left mouse down':
                destroy(self)

app = Ursina()
player = FirstPersonController()
for z in range(20):
    for x in range(20):
        cube = Cube(position=(x,0,z))

app.run()