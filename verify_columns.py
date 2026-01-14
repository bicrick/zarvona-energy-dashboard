#!/usr/bin/env python3
"""
Verify column indices for South Andrews pressure/injection data.

Usage:
  python verify_columns.py --sheet "36-4H" --header-row 9
  python verify_columns.py --sheet "37-6H" --header-row 9
"""

from __future__ import annotations

import argparse
from pathlib import Path

import pandas as pd

DEFAULT_FILE = Path("sheets/South Andrews Gauge Sheet.xlsm")


def normalize(value: object) -> str:
    if value is None:
        return ""
    return str(value).strip().lower()


def main() -> None:
    parser = argparse.ArgumentParser(description="Verify column indices for South Andrews.")
    parser.add_argument("--file", default=str(DEFAULT_FILE), help="Path to South Andrews Excel file")
    parser.add_argument("--sheet", required=True, help="Sheet name, e.g. 36-4H or 37-6H")
    parser.add_argument("--header-row", type=int, default=9, help="Header row index (1-based)")
    parser.add_argument("--rows", type=int, default=4, help="Number of rows to print")
    args = parser.parse_args()

    file_path = Path(args.file)
    if not file_path.exists():
        raise SystemExit(f"File not found: {file_path}")

    header_row_idx = args.header_row - 1
    df = pd.read_excel(file_path, sheet_name=args.sheet, header=None)
    if header_row_idx >= len(df):
        raise SystemExit(f"Header row {args.header_row} exceeds sheet length.")

    start = max(0, header_row_idx - 3)
    end = min(len(df), header_row_idx + args.rows)

    print(f"File: {file_path}")
    print(f"Sheet: {args.sheet}")
    print(f"Header row (1-based): {args.header_row}")
    print("-" * 80)

    for row_idx in range(start, end):
        row = [normalize(v) for v in df.iloc[row_idx].tolist()]
        joined = " | ".join(f"{i}:{cell}" for i, cell in enumerate(row) if cell)
        print(f"row {row_idx + 1}: {joined}")


if __name__ == "__main__":
    main()
