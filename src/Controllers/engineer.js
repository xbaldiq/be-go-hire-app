// Engineer
const delEng = require('../Models/engineer/deleteEngineer');
const getEng = require('../Models/engineer/getEngineer');
const patchEng = require('../Models/engineer/patchEngineer');
const postEng = require('../Models/engineer/postEngineer');

// Skill

const getEngSkill = require('../Models/engineer/skill/getskill');
const patchEngSkill = require('../Models/engineer/skill/patchSkill');
const postEngSkill = require('../Models/engineer/skill/postSkill');
const delEngSkill = require('../Models/engineer/skill/deleteSkill');

// Showcase
const patchEngSC = require('../Models/engineer/showcase/patchShowcase');
const postEngSC = require('../Models/engineer/showcase/postShowcase');
const delEngSC = require('../Models/engineer/showcase/deleteShowcase');

// utils
const utilPagination = require('../Models/utility/pagination');

// Project
const handleProject = require('../Models/engineer/project/handleProject');

const form = require('../Helpers/form');

module.exports = {
  getAllEngineer: (req, res) => {
    const { params, query, user } = req;
    if (user.user_type == 'company') {
      let p1 = utilPagination.paginationEngineer(query);
      let p2 = getEng.getAllEngineer(params, query);
      Promise.all([p1, p2])
        .then(result => {
          res.json(result);
        })
        .catch(error => {
          res.json(error);
        });
    } else if (user.user_type == 'engineer') {
      console.log('userId', user.id);
      getEng
        .getOneEngineer(user.id)
        .then(response => {
          form.success(
            res,
            // response.filter(result => result.id === req.user.id)
            response
          );
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  getEngineer: (req, res) => {
    const { params } = req;
    getEng
      .getOneEngineer(params)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  postEngineer: (req, res) => {
    const { body } = req;
    postEng
      .postEngineer(body)
      .then(response => {
        const data = {
          id: response.insertId,
          name: body.name,
          description: body.description,
          location: body.location,
          dateofbirth: body.dateofbirth,
          datecreated: new Date(),
          dateupdated: body.dateupdated
        };
        form.success(res, data);
      })
      .catch(err => console.log(err));
  },
  patchEngineer: (req, res) => {
    const { body, user } = req;
    console.log('userId', user.id);
    patchEng
      .patchEngineer(body, req.user.id)
      .then(response => {
        res.json(response);
      })
      .catch(err => console.log(err));
  },
  deleteEngineer: (req, res) => {
    // console.log(req.params)
    delEng
      .deleteEngineer(req.params)
      .then(response => {
        res.json(response);
      })
      .catch(err => console.log(err));
  },
  postEngineerSkill: (req, res) => {
    const { body } = req;
    postEngSkill
      .postEngineerSkill(body, req.user.id)
      .then(response => {
        form.success(
          res,
          (response.insert = body),
          200,
          'Success Insert Skill'
        );
      })
      .catch(err => console.log(err));
  },
  patchEngineerSkill: (req, res) => {
    const { body } = req;
    patchEngSkill
      .patchEngineerSkill(body, req.user.id)
      .then(response => {
        res.json(response);
      })
      .catch(err => console.log(err));
  },
  deleteEngineerSkill: (req, res) => {
    // console.log('params', req.params);
    delEngSkill
      .deleteEngineerSkill(req.query, req.user.id)
      .then(response => {
        res.json(response);
      })
      .catch(err => console.log(err));
  },
  postEngineerShowcase: (req, res) => {
    const { body } = req;
    postEngSC
      .postEngineerShowcase(body, req.user.id)
      .then(response => {
        res.json(response);
      })
      .catch(err => console.log(err));
  },
  patchEngineerShowcase: (req, res) => {
    const { body } = req;
    console.log(body);
    patchEngSC
      .patchEngineerShowcase(body, req.user.id)
      .then(response => {
        res.json(response);
      })
      .catch(err => console.log(err));
  },
  deleteEngineerShowcase: (req, res) => {
    delEngSC
      .deleteEngineerShowcase(req.body, req.user.id)
      .then(response => {
        res.json(response);
      })
      .catch(err => console.log(err));
  },
  getEngineerProject: (req,res) => {
    // console.log(req)
    console.log(req.query)
    handleProject
      .getEngineerProject(req.query)
      .then(response => {
        res.json(response)
      })
      .catch(err => console.log(err));
  },
  patchEngineerStatusProject: (req,res) => {
    // console.log(req)
    const { id, name_project, status_project } = req.query
    console.log(id, name_project,status_project )
    handleProject
      .patchEngineerStatusProject(id,name_project,status_project)
      .then(response => {
        res.json(response)
      })
      .catch(err => console.log(err));
  },
  getEngineerSkill: (req, res) => {
    getEngSkill
      .getEngineerSkill(req.user.id)
      .then(response => {
        res.json(response);
      })
      .catch(err => console.log(err));
  }

};
