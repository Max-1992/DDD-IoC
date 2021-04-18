export interface IDeleteUserUseCase {
    delete(id: string): Promise<void>
}