/*
 * Copyright 2019 IBM Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { v4 as uuid } from 'uuid'

// Notes: this is part of the Kui core API
import { Commands, Models, UI } from '@kui-shell/core'

import htmlTextContent from './content/text-html'
import domContent from './content/dom'
import markdownTextContent from './content/text-markdown'

// for demonstration purposes, use different content for each row
const rowContent = [
  { content: htmlTextContent(), contentType: 'text/html' },
  { content: domContent() },
  { content: markdownTextContent(), contentType: 'text/markdown' }
]

/**
 * This supports table row clicks with "show row <rowId>".
 *
 * Notes: the <string | HTMLElement> type covers the two types of
 * resource `content` that might be returned by this command.
 */
const showRow = ({ argvNoOptions }: Commands.Arguments): Models.ResourceWithMetadata<string | HTMLElement> => {
  const rowStr = argvNoOptions[argvNoOptions.length - 1]
  const rowId = !rowStr ? 1 : parseInt(rowStr, 10)
  if (rowId < 1 || rowId > rowContent.length) {
    throw new Error('row index out of range')
  }

  const { content, contentType } = rowContent[rowId - 1]

  const toolbarText = new UI.ToolbarText(rowId === 1 ? 'info' : rowId === 2 ? 'warning' : 'error',
                                         'Some informational text about this resource')

  const resource = {
    kind: 'row',
    metadata: {
      name: `Row ${rowId}`,
      namespace: 'This is some row content'
    },
    nameHash: uuid(),
    toolbarText,
    content,
    contentType
  }

  return resource
}

/**
 * Here is where we register our command.
 *
 */
export default (commandTree: Commands.Registrar) => {
  const cmd = commandTree.listen('/sample/show/row', showRow, {
    usage: {
      required: [
        { name: 'rowIndex', numeric: true, docs: 'A row index into the response of the table command' }
      ],
      docs: 'A row-click handler for the table command'
    }
  })
}
