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

import { Tables } from '@kui-shell/core'

export default (): Tables.Table => ({
  header: { name: 'header:1', attributes: [{ value: 'header:2' }, { value: 'header:3' } ]},
  body: [
    { name: 'cell:1 row:1', onclick: `sample show row 1`, attributes: [{ value: 'cell:2 row:1' }, { value: 'cell:3 row:1' } ]},
    { name: 'cell:1 row:2', onclick: `sample show row 2`, attributes: [{ value: 'cell:2 row:2' }, { value: 'cell:3 row:2' } ]},
    { name: 'cell:1 row:3', onclick: `sample show row 3`, attributes: [{ value: 'cell:2 row:3' }, { value: 'cell:3 row:3' } ]}
  ]
})
