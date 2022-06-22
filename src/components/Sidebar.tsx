import { useQuery } from '@apollo/client';
import {
  GetLessonsQueryResponse,
  GET_LESSSONS_QUERY
} from '../graphql/queries/lessons';
import { Lesson } from './Lesson';

export const Sidebar = () => {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 border-b border-gray-500 block mb-6">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
};
