from ursina import *
import ursina
from ursina import texture
from ursina.prefabs.first_person_controller import FirstPersonController

selection = 1
mouse2 = False
def update():
    global selection
    if held_keys['1']: selection = 1
    if held_keys['2']: selection = 2 
    if held_keys['3']: selection = 3
    if held_keys['esc']: 
        if mouse2:
            mouse.locked = False
            mouse.visible = True
        if not mouse2:
            mouse.locked = True
            mouse.visible = False
        
class Voxel(Button):
    def __init__(self, position = (0,0,0), color2 = color.rgb(31,99,49)):
        super().__init__(
            parent = scene,
            model = 'cube',
            position = position,
            orgin_y = 0.5,
            color = color2,
            scale = 1,
            double_sided = True
        )
    def input(self, key):
        if self.hovered:
            if key == 'right mouse down':
                if selection == 1: voxel = Voxel(position=self.position+mouse.normal, color2=color.rgb(31,99,49))
                if selection == 2: voxel = Voxel(position=self.position+mouse.normal, color2=color.rgb(51, 45, 12))
                if selection == 3: voxel = Voxel(position=self.position+mouse.normal, color2=color.rgb(68, 74, 84))
            if key == 'left mouse down':
                destroy(self)

app = Ursina()
for z in range(20):
    for x in range(20):
        voxel = Voxel(position=(x,0,z), color2=color.rgb(31,175,49))
player = FirstPersonController()

window.title = 'MineYraft'
window.borderless = False
window.fullscreen = False
window.exit_button.visible = False
window.fps_counter.enabled = True
window.cog_button.visible = True

app.run()