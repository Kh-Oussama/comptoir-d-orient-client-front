import React from 'react';
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";


export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,

        iconClosed: <IcomoonReact iconSet={iconSet} size={20} icon="chevron-small-down"/>,
        iconOpened:<IcomoonReact iconSet={iconSet} size={20} icon="chevron-small-up"/>
        ,

        subNav: [
            {
                title: 'Users',
                path: '/shop',
                icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,
                iconClosed: <IcomoonReact iconSet={iconSet} size={20} icon="chevron-small-down"/>,
                iconOpened:<IcomoonReact iconSet={iconSet} size={20} icon="chevron-small-up"/>,

                subNavTwo: [
                    {
                        title: 'Users',
                        path: '/shop',
                        icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,
                    },
                    {
                        title: 'Revenue',
                        path: '/shop',
                        icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,
                    }
                ]
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,


            }
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,

        iconClosed: <IcomoonReact iconSet={iconSet} size={20} icon="chevron-small-down"/>,
        iconOpened: <IcomoonReact iconSet={iconSet} size={20} icon="chevron-small-up"/>,

        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,

                cName: 'sub-nav'
            },
            {
                title: 'Reports 2',
                path: '/reports/reports2',
                icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,

                cName: 'sub-nav'
            },
            {
                title: 'Reports 3',
                path: '/reports/reports3',
                icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,

            }
        ]
    },
    {
        title: 'Products',
        path: '/products',
        icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,


    },
    {
        title: 'Team',
        path: '/team',
        icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,


    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,


        iconClosed: <IcomoonReact iconSet={iconSet} size={20} icon="chevron-small-down"/>,
        iconOpened: <IcomoonReact iconSet={iconSet} size={20} icon="chevron-small-up"/>,

        subNav: [
            {
                title: 'Message 1',
                path: '/messages/message1',
                icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,

            },
            {
                title: 'Message 2',
                path: '/messages/message2',
                icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,

            }
        ]
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IcomoonReact iconSet={iconSet} size={20} icon="sweden"/>,

    }
];