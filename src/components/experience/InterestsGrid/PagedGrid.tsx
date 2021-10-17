import React, { FunctionComponent } from 'react';
import {
  Button,
  IconButton,
  Layout,
  PickList,
  RenderIf,
  RenderInLayout,
  Title,
  DotPagination,
  useSimplePagination
} from 'activate-components';
import PlainGrid from './PlainGrid';
import { ArrowNotch, Content, Footer, SectionTitle, Wrapper } from './styled';
import { GridProps } from './index';

const PagedGrid: FunctionComponent<GridProps> = (props): any => {
  const { interests, value, onToggleAll, cols, ...rest } = props;
  const { page, goNext, goBack, setPage } = useSimplePagination(interests.length);
  const { id, name, subcategories } = interests[page];
  const areAllSubsSelected = subcategories.every(
    sub => (value as string[]).some(cat => cat === sub.id)
  );

  return (
    <Wrapper>
      <Content>
        <RenderInLayout ifNot layout={Layout.MOBILE}>
          <ArrowNotch>
            <IconButton onClick={goBack} icon="ARROW_LEFT" variant="flat" />
          </ArrowNotch>
        </RenderInLayout>
        <PickList
          layout="grid"
          color="brand"
          size="small"
          cols={cols}
          value={value}
          {...rest}
        >
          <SectionTitle justify="space-between" width="100%">
            <Title level={3}>{name}</Title>
            <RenderIf condition={!!onToggleAll}>
              <Button
                onClick={() => onToggleAll(id, areAllSubsSelected)}
                label={areAllSubsSelected ? 'Clear All' : 'Select All'}
                variant="outline"
                color="accent"
                padding="0 8px"
                sm
              />
            </RenderIf>
          </SectionTitle>
          <PlainGrid interests={subcategories} asFragment />
        </PickList>
        <RenderInLayout ifNot layout={Layout.MOBILE}>
          <ArrowNotch>
            <IconButton onClick={goNext} icon="ARROW_RIGHT" variant="flat" />
          </ArrowNotch>
        </RenderInLayout>
      </Content>
      <Footer>
        <RenderInLayout layout={Layout.MOBILE}>
          <IconButton onClick={goBack} icon="ARROW_LEFT" variant="flat" mR />
        </RenderInLayout>
        <DotPagination
          page={page}
          total={interests.length}
          onChange={setPage}
        />
        <RenderInLayout layout={Layout.MOBILE}>
          <IconButton onClick={goNext} icon="ARROW_RIGHT" variant="flat" mL />
        </RenderInLayout>
      </Footer>
    </Wrapper>
  );
};

export default PagedGrid;
