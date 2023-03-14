import { Router } from 'express';
import { addCollaborator, createProject, deleteCollaborator, deleteProject, getProject, getProjects, getTasksProject, updateProject } from '../controllers';
import { checkSesion } from '../middlewares';

const router = Router();

router.use( checkSesion );

router.route( '/' )
  .get( getProjects)
  .post( createProject );

router.route( '/:id' )
  .get( getProject )
  .put( updateProject )
  .delete( deleteProject );

router.get( '/task', getTasksProject );
router.post( '/add-colaborator/:id', addCollaborator );
router.post( '/delete-colaborator/:id', deleteCollaborator );

export default router;