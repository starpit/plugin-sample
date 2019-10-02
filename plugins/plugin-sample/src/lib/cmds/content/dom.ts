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

import { loremIpsum } from "lorem-ipsum"
import imageContent from './image'

export default () => {
  const dom = document.createElement('div')

  // these are convenience classes offered by Kui; you can always roll
  // your own css content
  dom.classList.add('padding-content', 'scrollable', 'page-content')

  const paragraph1 = document.createElement('p')
  paragraph1.innerText = loremIpsum({ count: 20 })
  dom.appendChild(paragraph1)

  const paragraph2 = document.createElement('p')
  paragraph2.appendChild(imageContent())
  dom.appendChild(paragraph2)

  return dom
}
