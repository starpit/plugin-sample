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

/**
 * This file introduces a "modes" command that opens the sidecar with
 * three modes.
 *
 */

// Notes: this is part of the Kui core API
import { Commands, UI } from '@kui-shell/core'

import htmlTextContent from './content/text-html'
import domContent from './content/dom'
import plainTextContent from './content/text-plain'
import markdownTextContent from './content/text-markdown'
import imageContent from './content/image'
import tableContent from './content/table'

/**
 * Construct a MultiModalResponse with a variety of modes
 *
 */
function modes(): UI.MultiModalResponse {
  // you should see the various parts of the metadata decorate the
  // resulting view
  return {
    kind: 'kindpart',
    metadata: {
      name: 'this is the name part',
      namespace: 'this is the namespace part'
    },  
    modes: [
      { mode: 'html', label: 'HTML Text', content: htmlTextContent(), contentType: 'text/html' },
      { mode: 'dom', label: 'HTML DOM', content: domContent() },
      { mode: 'text', label: 'Plain Text', content: plainTextContent() },
      { mode: 'image', content: imageContent() },
      { mode: 'markdown', content: markdownTextContent(), contentType: 'text/markdown' },
      { mode: 'table', content: tableContent() }
    ]
  }
}

/**
 * Here is where we register our command.
 *
 */
export default (commandTree: Commands.Registrar) => {
  commandTree.listen('/modes', modes, {
    usage: {
      docs: 'A showcase of MultiModalResponse'
    }
  })
}
