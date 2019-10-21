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

// Notes: this is part of the Kui core API
import { Commands } from '@kui-shell/core'

/**
 * A simple command handler that returns a string Response
 *
 */
const sayHello = (): Commands.Response => {
  return 'hello world'
}

/**
 * Here is where we register our commands: a handler for "hello", and
 * an alias of that command as "hi".
 *
 */
export default (commandTree: Commands.Registrar) => {
  const cmd = commandTree.listen('/sample/hello', sayHello, {
    usage: {
      docs: 'The obligatory hello world'
    }
  })
  commandTree.synonym('/sample/hi', sayHello, cmd)
}
