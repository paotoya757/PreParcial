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

package co.edu.uniandes.csw.general.curso.master.persistence.entity;

import co.edu.uniandes.csw.general.seccion.persistence.entity.SeccionEntity;
import co.edu.uniandes.csw.general.curso.persistence.entity.CursoEntity;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.PrimaryKeyJoinColumn; 
import org.eclipse.persistence.annotations.JoinFetch;

@Entity
@IdClass(Cursoseccion_cursoEntityId.class)
@NamedQueries({
    @NamedQuery(name = "Cursoseccion_cursoEntity.getByMasterId", query = "SELECT  u FROM Cursoseccion_cursoEntity u WHERE u.cursoId=:cursoId"),
    @NamedQuery(name = "Cursoseccion_cursoEntity.deleteCursoseccion_cursoEntity", query = "DELETE FROM Cursoseccion_cursoEntity u WHERE u.cursoId=:cursoId and  u.seccion_cursoId=:seccion_cursoId")
})
public class Cursoseccion_cursoEntity implements Serializable {

    @Id
    @Column(name = "cursoId")
    private Long cursoId;
    @Id
    @Column(name = "seccion_cursoId")
    private Long seccion_cursoId;
    @ManyToOne
    @PrimaryKeyJoinColumn(name = "cursoId", referencedColumnName = "id")
    @JoinFetch
    private SeccionEntity cursoIdEntity;
    @ManyToOne
    @PrimaryKeyJoinColumn(name = "seccion_cursoId", referencedColumnName = "id")
    @JoinFetch
    private SeccionEntity seccion_cursoIdEntity; 

    public Cursoseccion_cursoEntity() {
    }

    public Cursoseccion_cursoEntity(Long cursoId, Long seccion_cursoId) {
        this.cursoId =cursoId;
        this.seccion_cursoId = seccion_cursoId;
    }

    public Long getCursoId() {
        return cursoId;
    }

    public void setCursoId(Long cursoId) {
        this.cursoId = cursoId;
    }

    public Long getSeccion_cursoId() {
        return seccion_cursoId;
    }

    public void setSeccion_cursoId(Long seccion_cursoId) {
        this.seccion_cursoId = seccion_cursoId;
    }

    public SeccionEntity getCursoIdEntity() {
        return cursoIdEntity;
    }

    public void setCursoIdEntity(SeccionEntity cursoIdEntity) {
        this.cursoIdEntity = cursoIdEntity;
    }

    public SeccionEntity getSeccion_cursoIdEntity() {
        return seccion_cursoIdEntity;
    }

    public void setSeccion_cursoIdEntity(SeccionEntity seccion_cursoIdEntity) {
        this.seccion_cursoIdEntity = seccion_cursoIdEntity;
    }

}
