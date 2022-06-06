import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../../repositories/ICategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

/**
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno de erro
 * [x] - Acessar o repositório
 * [x] - Retornar algo
 */

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
