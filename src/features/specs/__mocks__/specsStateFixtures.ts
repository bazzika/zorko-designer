import {SpecPresenter} from '../presenters';
import {SpecsPresenter} from '../presenters';

export const getStateWithOneSpec = (id, spec, initState?) =>
  SpecsPresenter.create(initState)
    .set(
      id,
      SpecPresenter.create()
        .setEncoding(id)
        .setData(spec.data)
        .setDescription(spec.description)
        .setMark(spec.mark as string)
        .setEncoding(id)
        .toState()
    )
    .toState();