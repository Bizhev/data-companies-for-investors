export interface BaseMapper<DomainModel, APIModel> {
  toUI?(model: APIModel): DomainModel
  toAPI?(model: DomainModel): APIModel
}
