from dataclasses import dataclass
from collections import defaultdict

@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int


"""
Task 1
"""
def leafFiles(files: list[File]) -> list[str]:
    namelist = list()
    for file in files:
        isParentOf = filter(lambda x: x.parent == file.id, files)
        parentOf = list(isParentOf)
        if len(parentOf) == 0:
            namelist.append(file.name)
    return namelist


"""
Task 2
"""

def kLargestCategories(files: list[File], k: int) -> list[str]:
    categoryFrequency = {}
    for file in files:
        for cat in file.categories:
            if not cat in categoryFrequency:
                categoryFrequency[cat] = 0
            categoryFrequency[cat] += 1
    categoryFrequency = sorted(categoryFrequency.items(), key=lambda x: (-x[1],x[0]))
    kCat = list(dict(categoryFrequency).keys())[:k]
    return kCat


"""
Task 3
"""
def largestFileSize(files: list[File]) -> int:
    fileSizeDict = {}
    for file in files:
        fileSizeDict[file.name] = 0
    for file in files:
        currentFile = file
        fileSizeDict[file.name] += file.size
        while not currentFile.parent == -1:
            child = currentFile
            currentFile = list(filter(lambda x: x.id == currentFile.parent, files))[0]
            fileSizeDict[currentFile.name] += file.size
    largestSize = 0
    for key in fileSizeDict:
        if fileSizeDict[key] > largestSize:
            largestSize = fileSizeDict[key]
    return largestSize

if __name__ == '__main__':
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]

    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]

    

    assert kLargestCategories(testFiles, 3) == [
        "Documents", "Folder", "Media"
    ]

    assert largestFileSize(testFiles) == 20992
