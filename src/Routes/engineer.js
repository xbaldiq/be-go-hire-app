const express = require ('express');
const controller = require ('../Controllers/engineer');

const Router = express.Router ();

Router.get ('/', controller.getAllEngineer); // localhost:8000/user/
// Router.get ('/', controller.getEngineer); // localhost:8000/user/
Router.post ('/', controller.postEngineer);
Router.patch('/:id', controller.patchEngineer)
Router.delete('/:id', controller.deleteEngineer)

Router.post ('/skill/:id', controller.postEngineerSkill);
Router.patch ('/skill/:id/:skill_item_id', controller.patchEngineerSkill);
Router.delete ('/skill/:id/:skill_item_id', controller.deleteEngineerSkill);

Router.post ('/showcase/:id', controller.postEngineerShowcase);
Router.patch ('/showcase/:id/:showcase_item_id', controller.patchEngineerShowcase);
Router.delete ('/showcase/:id/:showcase_item_id', controller.deleteEngineerShowcase);


module.exports = Router;

// Router.post ('/:id', controller.postEngineer);