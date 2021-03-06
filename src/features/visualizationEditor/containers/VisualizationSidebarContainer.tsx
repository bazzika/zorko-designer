import React, {useCallback} from 'react';
import {Button} from '../../../components';
import {useDispatch, useSelector} from 'react-redux';
import {specMarkEdit} from '../../specs/slices';
import {DataSourceFieldListContainer} from '../../dataSourceMetadata/containers/DataSourceFieldListContainer';
import {selectVegaLiteSchemaMarkOptions} from '../../vegaLiteSchema/selectors/vegaLiteSchemaSelectors';
import {selectAnalyticBoardMainSpecId} from '../../analyticBoard/selectors/analyticBoardSelectors';

export const VisualizationSidebarContainer = () => {
  const specId = useSelector(selectAnalyticBoardMainSpecId);
  const markOptions = useSelector(selectVegaLiteSchemaMarkOptions);
  const dispatch = useDispatch();
  const changeMark = useCallback(
    (id, mark) => {
      dispatch(specMarkEdit(id, mark));
    },
    [dispatch]
  );

  return (
    <>
      <div>
        <div>Marks: </div>
        {markOptions.map((option, i) => (
          <Button
            key={i}
            onClick={() => {
              changeMark(specId, option.value);
            }}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <div>
        <div>Fields: </div>
        <DataSourceFieldListContainer />
      </div>
    </>
  );
};
