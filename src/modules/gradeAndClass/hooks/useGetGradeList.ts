import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import useApi from 'src/modules/share/hooks/useApi';
import { getGradeListParamsAtom } from '../state';
import { GetGradeListData, GetGradeListParams } from '../types';

type GetGradeListDataParams = GetGradeListParams;

type GetGradeListDataResponse = {
  data: GetGradeListData;
  status: true;
};

type GetGradeListDataError = unknown;

const useGetGradeList = () => {
  const params = useRecoilValue(getGradeListParamsAtom);

  const { fetchApi, data, isLoading } = useApi<
    GetGradeListDataParams,
    GetGradeListDataResponse,
    GetGradeListDataError
  >('getGradeList', ({ page, limit, name, code }) => ({
    method: 'GET',
    url: '/api/grades',
    params: {
      page,
      limit,
      name,
      code,
    },
  }));

  useEffect(() => {
    fetchApi(params);
  }, [params]);

  const reload = () => {
    fetchApi(params);
  };

  return {
    data,
    isLoading,
    getGradeList: fetchApi,
    reload,
  };
};

export default useGetGradeList;
