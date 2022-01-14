const {Employee} = require('../models')
const titles = ['SVP', 'CEO', 'Manager1'];
const states = ['CA', 'AZ', 'OR'];


module.exports.displayEmployees = async function(req, res){
    const employees = await Employee.findAll();
    res.render('index', {employees})
};
module.exports.renderAddEmployeeForm = function(req, res){
    res.render('createUserForm',
        {
            employee: {
                first:'',
                last:'',
                title:titles[0],
                street1:'',
                street2:'',
                city:'',
                state:states[0],
                zip:'',
                phone:'',
                yearstarted:''
            },
            titles,
            stateslist:states
        });
};
module.exports.addEmployee = async function(req, res){
    await Employee.create(
        {
            first:req.body.first,
            last:req.body.last,
            title:req.body.title,
            street1:req.body.street1,
            street2:req.body.street2,
            city:req.body.city,
            state:req.body.state,
            zip:req.body.zip,
            phone:req.body.phone,
            yearstarted:req.body.yearstarted
        }
    );
    res.redirect('/');
};
module.exports.renderUpdateForm = async function(req, res){
    const employee = await Employee.findByPk(req.params.id);
    res.render('edit', {
        employee,
        titles,
        stateslist:states
    });
};
module.exports.updateEmployee = async function(req, res){
    await Employee.update(
        {
            first:req.body.first,
            last:req.body.last,
            title:req.body.title,
            street1:req.body.street1,
            street2:req.body.street2,
            city:req.body.city,
            state:req.body.state,
            zip:req.body.zip,
            phone:req.body.phone,
            yearstarted:req.body.yearstarted
        },
        {
            where: {
                id: req.params.id
            }
        });
    res.redirect('/');
};
module.exports.deleteEmployee = async function(req, res){
    await Employee.destroy({
        where: {
            id:req.params.id
        }
    });
    res.redirect('/');
}