/* ========================================================================
 * Copyright 2014 general
 *
 * Licensed under the MIT, The MIT License (MIT)
 * Copyright (c) 2014 general

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 * ========================================================================


Source generated by CrudMaker version 1.0.0.201408112050

*/

package co.edu.uniandes.csw.general.estudiante.service;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.inject.Inject;

import co.edu.uniandes.csw.general.estudiante.logic.api.IEstudianteLogicService;
import co.edu.uniandes.csw.general.estudiante.logic.dto.EstudianteDTO;


public abstract class _EstudianteService {

	@Inject
	protected IEstudianteLogicService estudianteLogicService;
	
	@POST
	public EstudianteDTO createEstudiante(EstudianteDTO estudiante){
		return estudianteLogicService.createEstudiante(estudiante);
	}
	
	@DELETE
	@Path("{id}")
	public void deleteEstudiante(@PathParam("id") Long id){
		estudianteLogicService.deleteEstudiante(id);
	}
	
	@GET
	public List<EstudianteDTO> getEstudiantes(){
		return estudianteLogicService.getEstudiantes();
	}
	
	@GET
	@Path("{id}")
	public EstudianteDTO getEstudiante(@PathParam("id") Long id){
		return estudianteLogicService.getEstudiante(id);
	}
	
	@PUT
    @Path("{id}")
	public void updateEstudiante(@PathParam("id") Long id, EstudianteDTO estudiante){
		estudianteLogicService.updateEstudiante(estudiante);
	}
	
}