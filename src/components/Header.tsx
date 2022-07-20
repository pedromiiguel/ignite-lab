import classNames from 'classnames';
import { List, X } from 'phosphor-react';
import { useState } from 'react';
import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';
import { Logo } from './Logo';
import { Sidebar } from './Sidebar';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetLessonsQuery();

  const OpenMenu = () => {
    setIsOpen(true);
  };

  const CloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <menu
      className={classNames({
        'absolute inset-0 z-50 bg-gray-700': isOpen
      })}
    >
      <header
        className={classNames(
          'w-full flex items-center justify-between sm:justify-center p-5 bg-gray-700 border-b border-gray-600 ',
          {
            'sm:justify-between': isOpen
          }
        )}
      >
        <Logo />
        <div
          className={classNames('cursor-pointer text-green-500', {
            'sm:hidden ': !isOpen
          })}
        >
          {isOpen ? (
            <X size={32} onClick={CloseMenu} />
          ) : (
            <List size={32} onClick={OpenMenu} />
          )}
        </div>
      </header>
      <div className={`${!isOpen && 'hidden'}`}>
        <div className=" flex items-center justify-center ">
          <div className="flex flex-col gap-8  w-full p-8">
            {data?.lessons.map((lesson) => {
              return (
                <div key={lesson.id} onClick={CloseMenu}>
                  <Lesson
                    title={lesson.title}
                    slug={lesson.slug}
                    availableAt={new Date(lesson.availableAt)}
                    type={lesson.lessonType}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </menu>
  );
};
