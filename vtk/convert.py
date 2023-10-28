import vedo as vd
vol = vd.load('data/test.nii.gz') #vtkVolume
vol.isosurface().show()
# or convert to vtk format:
vol.write('data/newfile.vti')
