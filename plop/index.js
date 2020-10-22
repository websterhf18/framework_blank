
module.exports = function (plop) {
    // controller generator
    plop.setGenerator('controller', {
        description: 'Crear caso de uso ejemplo',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Nombre del caso de uso'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/domain/useCase/{{name}}.service.ts',
                templateFile: 'plop/templates/templateUseCase.hbs'
            },
            {
                type: 'add',
                path: 'src/domain/entities/{{name}}.entity.ts',
                templateFile: 'plop/templates/templateEntity.hbs'
            },
            {
                type: 'add',
                path: 'src/domain/repository/{{name}}.repository.ts',
                templateFile: 'plop/templates/templateRepo.hbs'
            }
        ]
    });
};