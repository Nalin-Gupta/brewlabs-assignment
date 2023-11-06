const Joi                        = require('joi');



exports.getBookById              = getBookById;
exports.addBooks                 = addBooks;
exports.updateBooks              = updateBooks;
exports.deleteBooks              = deleteBooks;



function getBookById(req, res, next) {

    const schema = Joi.object().keys({
        id         : Joi.string().required()
    });
    let  validation = schema.validate(req.params);
    if (!validation.error) {
        next();
    }
    else{
        return res.status(400).send({
            message : "Incorrect or Missing Parameter in Payload",
            error   : validation.error
        })
    }
}

function addBooks(req, res, next) {

    const schema = Joi.object().keys({
        title         : Joi.string().required(),
        author        : Joi.string().required(),
        summary       : Joi.string().required()

    });
    let  validation = schema.validate(req.body);
    if (!validation.error) {
        next();
    }
    else{
        return res.status(400).send({
            message : "Incorrect or Missing Parameter in Payload",
            error   : validation.error
        })
    }
}

function updateBooks(req, res, next) {

    const paramsSchema = Joi.object().keys({
        id         : Joi.number().required()
    });
    const bodySchema   = Joi.object().keys({
        title      : Joi.string().optional(),
        author     : Joi.string().optional(),
        summary    : Joi.string().optional()
    })
    let  paramsValidation = paramsSchema.validate(req.params);
    let  bodyValidation   = bodySchema.validate(req.body);
    if (!paramsValidation.error && !bodyValidation.error) {
        next();
    }
    else{
        return res.status(400).send({
            message : "Incorrect or Missing Parameter in Payload",
            error   : paramsValidation.error || bodyValidation.error
        })
    }
}

function deleteBooks(req, res, next) {

    const schema = Joi.object().keys({
        id         : Joi.string().required()
    });
    let  validation = schema.validate(req.params);
    if (!validation.error) {
        next();
    }
    else{
        return res.status(400).send({
            message : "Incorrect or Missing Parameter in Payload",
            error   : validation.error
        })
    }
}
