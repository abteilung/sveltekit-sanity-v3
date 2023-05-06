import {Columns} from '@phosphor-icons/react'

export default {
  name: 'columns',
  title: 'Columns',
  type: 'object',
  icon: Columns,
  fields: [
    {
      title: 'Columns Configuration (md)',
      name: 'columnNumber',
      type: 'string',
      initialValue: '2_6-6',
      options: {
        list: [
          {title: '1: 100%', value: '1_100'},
          {title: '2: 50% 50%', value: '2_6-6'},
          {title: '2: 40% 60%', value: '2_5-7'},
          {title: '2: 75% 25%', value: '2_9-3'},
          {title: '2: 25% 75%', value: '2_3-9'},
          {title: '3: 33% 33% 33%', value: '3_4-4-4'},
          {title: '3: 50% 25% 25%', value: '3_6-3-3'},
          {title: '3: 25% 50% 25%', value: '3_3-6-3'},
          {title: '3: 25% 25% 50%', value: '3_3-3-6'},
          {title: '4: 25% 25% 25% 25%', value: '4_3-3-3-3'}
        ]
      }
    },
    {
      title: 'Columns Configuration (lg)',
      name: 'columnNumberLg',
      type: 'string',
      initialValue: '2_6-6',
      options: {
        list: [
          {title: '1: 100%', value: '1_100'},
          {title: '2: 50% 50%', value: '2_6-6'},
          {title: '2: 40% 60%', value: '2_5-7'},
          {title: '2: 75% 25%', value: '2_9-3'},
          {title: '2: 25% 75%', value: '2_3-9'},
          {title: '3: 33% 33% 33%', value: '3_4-4-4'},
          {title: '3: 50% 25% 25%', value: '3_6-3-3'},
          {title: '3: 25% 50% 25%', value: '3_3-6-3'},
          {title: '3: 25% 25% 50%', value: '3_3-3-6'},
          {title: '4: 25% 25% 25% 25%', value: '4_3-3-3-3'}
        ]
      }
    },
    {
      title: 'Column #1',
      name: 'column_1',
      type: 'pageBuilder',
      hidden: ({parent}) => {
        if (!parent.columnNumber) return true
      }
    },
    {
      title: 'Column #2',
      name: 'column_2',
      type: 'pageBuilder',
      hidden: ({parent}) => {
        if (!parent.columnNumber) return true
        const columnNumber = parent.columnNumber.split('_')[0]
        return columnNumber < 2
      }
    },
    {
      title: 'Column #3',
      name: 'column_3',
      type: 'pageBuilder',
      hidden: ({parent}) => {
        if (!parent.columnNumber) return true
        const columnNumber = parent.columnNumber.split('_')[0]
        return columnNumber < 3
      }
    },
    {
      title: 'Column #4',
      name: 'column_4',
      type: 'pageBuilder',
      hidden: ({parent}) => {
        if (!parent.columnNumber) return true
        const columnNumber = parent.columnNumber.split('_')[0]
        return columnNumber < 4
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      columnNumber: 'columnNumber'
    },
    prepare({columnNumber, title}) {
      return {
        icon: Columns,
        title: 'Columns: ' + title,
        subtitle: columnNumber ? columnNumber.split('_')[1] : '2'
      }
    }
  }
}
