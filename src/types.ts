/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Dimension = 'Frequency' | 'Target' | 'Quality' | 'Planning';

export type SBTIComponent = 'S' | 'G' | 'O' | 'Q' | 'N' | 'P' | 'I';

export interface Question {
  id: number;
  dimension: Dimension;
  text: string;
  options: {
    text: string;
    value: string; // 'S', 'G', etc.
  }[];
}

export interface SBTIResult {
  type: string; // e.g., "SSQP"
  title: string;
  description: string;
  characteristics: string[];
  advice: string;
  color: string;
}
